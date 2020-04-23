import React from 'react'
import styles from './ListItem.module.css'
import cs from 'classnames'

const ListItem = ({id, name, selected, onSelect }) => {

    return (
        <div className={selected ? cs(styles.root, styles.selected) : styles.root} onClick={() => onSelect(id)}>
            <div className="row">
                <div className="col-md-12">
                    <p className={styles.name}>{name}</p>
                </div>
            </div>
        </div>
    )
}


export default ListItem
