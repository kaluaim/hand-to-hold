/**
 * Communicate with Auth API to login and verify OTP
 */

import axios from 'axios'

const API_AUTH = `/auth`

/**
 * Login user using 'phone' number
 * @param   {*} phone to login with
 * @returns {success}   obj with 'status' 200 and 'message' with OTP SMS conformation 
 * @returns {fail}      obj with 'status' 400 and error 'message'
 * @http    POST
 * @endpoint /login
 */
export const login = async phone => {
    // const response = await axios.post(LOGIN_ENDPOINT, body)
    // const data = await response.data
    // console.log(`Log in request (response): ${JSON.stringify(data, null, 2)}`)
    // return data
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { status: 200, message: 'SMS sent to ********4234' }
    // return {status: 400, message: 'Can not send to this number!'}
}

/**
 * Verify 'otp'
 * @param   {*} otp   to verify
 * @returns {success}   obj with 'status' 200 and 'token' 
 * @returns {fail}      obj with 'status' 400 and error 'message'
 * @http    POST
 * @endpoint /otp
 */
export const verifyOTP = async otp => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { status: 200, message: '', token: 'dsafoiuo-asf-asfd-asf' }
    // return {status: 400, message: 'wrong opt!'}
}