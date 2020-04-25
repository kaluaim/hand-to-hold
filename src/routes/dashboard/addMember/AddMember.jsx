import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import styles from './AddMember.module.css'
import cs from 'classnames'

const AddMember = props => {
    const { open, onClose, onSubmit, onCancel, isUIDisabled, isLoading, errorMsg } = props
    const [mName, setMName] = useState('')
    const [mNumber, setMNumber] = useState('')

    const styledModal = {
        modal: {
            background: '#fff',
            padding: 0,
            borderRadius: '21px',
            maxWidth: '500px',
            width: '100%',
            minHeight: '200px'
        },
        closeButton: {
            display: 'none',
        },
    }

    const clear = () => {
        setMName('')
        setMNumber('')
    }


    return (
        <Modal open={open} onClose={onClose} center styles={styledModal}>
            <div className={cs(styles.header)}>add member</div>
            <div className="mb-5 d-flex flex-column h-100">
                <div className="d-flex flex-column justify-content-center flex-grow-1">
                    <div className="row">
                        <div className="col-12">
                            <div className={cs(styles.formWrapper, 'mx-auto')}>
                                <div className={styles.form}>

                                    <div className="mt-5 mb-1 text-center">
                                        <div className="row">
                                            <div className={cs('col-12', styles.red)}>
                                                {errorMsg === ''
                                                    ? <></>
                                                    : <>{errorMsg}</>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={e => onSubmit(e, mName, mNumber, clear)}>
                                        <div className={cs(styles.formInputWrapper)}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className={styles.inputWrapper}>
                                                        <input
                                                            name="mName"
                                                            type="text"
                                                            value={mName}
                                                            onChange={(e) => setMName(e.target.value)}
                                                            placeholder={'member name...'}
                                                            className={styles.formInput}
                                                            maxLength="500"
                                                            disabled={isUIDisabled}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={cs(styles.formInputWrapper)}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className={styles.inputWrapper}>
                                                        <input
                                                            name="mNumber"
                                                            type="text"
                                                            value={mNumber}
                                                            onChange={(e) => setMNumber(e.target.value)}
                                                            placeholder={'member number...'}
                                                            className={styles.formInput}
                                                            maxLength="500"
                                                            disabled={isUIDisabled}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btn-wrapper text-center">
                                            <div className="row">
                                                <div className="col-12">
                                                    <button type="submit" onClick={e => onSubmit(e, mName, mNumber, clear)} className={styles.submitBtn} disabled={isUIDisabled}>
                                                        <span>
                                                            {isLoading
                                                                ? <span className="spinner-border spinner-border-sm float-left mt-1" role="status" aria-hidden="true"></span>
                                                                : <></>
                                                            }
                                                            <span style={{ verticalAlign: 'text-top' }}>add</span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btn-wrapper text-center">
                                            <div className="row">
                                                <div className="col-12">
                                                    <button type="button" onClick={onCancel} className={styles.submitBtn} disabled={isUIDisabled}>
                                                        <span>
                                                            <span style={{ verticalAlign: 'text-top' }}>cancel</span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )

}


export default AddMember