import React from 'react'
import styles from './Row.module.css'
import cs from 'classnames'

const Row = ({ member, onUpdate, onDelete }) => {

    return (
        <tr>
            <td>{member.name}</td>
            <td>{member.number}</td>
            <td>
                <button className={cs('btn', 'btn-sm', styles.updateButton, 'mr-2')} onClick={() => onUpdate(member)}><i className="fas fa-pen"></i></button>
                <button className={cs('btn', 'btn-sm', styles.deleteButton)} onClick={() => onDelete(member)}><i className="fas fa-trash"></i></button>
            </td>
        </tr>
    )
}


export default Row