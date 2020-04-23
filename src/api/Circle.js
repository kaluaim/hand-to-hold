/**
 * Communicate with Circle API manage circles and members
 */
import axios from 'axios'
import { getUserToken } from '../storage/local'

const API_CIRCLE = `/circle`

let DB = []

/**
 * Fetch all loged in user's circles
 * @returns {success}   obj with 'status' 200 and 'data' array with all circles 
 * @returns {fail}      obj with 'status' 400 and error 'message'
 * @http    GET
 * @endpoint /
 */
export const fetchAll = async() => {
    console.log('API -> [circle] fetchAll');
    // const CIRCLE_ENDPOINT = '/';
    // const response = await axios.get(API_CIRCLE+CIRCLE_ENDPOINT, { headers: { Authorization: 'Bearer ' + getUserToken() } });
    // return response;
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { status: 200, message: '', data: DB }
    // return {status: 400, message: '!'}
}

/**
 * Fetch circle by 'id'
 * @param {*} id    of circle to fetch
 * @returns {success}   obj with 'status' 200 and 'data' with circle 
 * @returns {fail}      obj with 'status' 400 and error 'message'
 * @http    GET
 * @endpoint /{id}
 */
export const fetch = async(id) => {
    console.log('API -> [circle] fetch/' + id);
    let c = DB.filter(i => { return i.id === id })
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { status: 200, message: '', data: c[0] }
    // return {status: 400, message: '!'}
}

/**
 * Create a 'circle'
 * @param {*} circle
 * @returns {success}   obj with 'status' 200 and 'data' with circle 
 * @returns {fail}      obj with 'status' 400 and error 'message'
 * @http    POST
 * @endpoint /
 */
export const create = async(circle) => {
    console.log('API -> [circle] create/' + JSON.stringify(circle));
    let randomID = guid()
    circle.id = randomID
    circle.members = []
    DB.push(circle)
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(circle);

    return { status: 200, message: '', data: circle }
    // return {status: 400, message: '!'}
}

/**
 * Add 'member' into 'circle'
 * @param {*} circle    to add into it
 * @param {*} member    to be added
 * @returns {success}   obj with 'status' 200 and 'data' with member 
 * @returns {fail}      obj with 'status' 400 and error 'message'
 * @http    POST
 * @endpoint /{circle.id}/member
 */
export const addMember = (circle, member) => {
    let randomID = guid()
    member.id = randomID
    let o = DB.filter(i => { return i.id === circle.id })
    console.log('got circle from db');
    console.log(o);
    o[0].members.push(member)
    return { status: 200, message: '', data: member }
}

/**
 * Update 'member' in 'circle'
 * @param {*} circle    of the member
 * @param {*} member    to be updated
 * @returns {success}   obj with 'status' 200 and 'data' with member 
 * @returns {fail}      obj with 'status' 400 and error 'message'
 * @http    PUT
 * @endpoint /{circle.id}/member/{member.id}
 */
export const updateMember = (circle, member) => {}

/**
 * Delete 'member' from 'circle'
 * @param {*} circle    of the member
 * @param {*} member    to be deleted
 * @returns {success}   obj with 'status' 200 and 'message' 
 * @returns {fail}      obj with 'status' 400 and error 'message'
 * @http    DELETE
 * @endpoint /{circle.id}/member/{member.id}
 */
export const deleteMember = (circle, member) => {}

/**
 * Generate random id
 * @returns random id string with format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
 * @source  https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/
 */
let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}