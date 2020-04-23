import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import styles from './CreateCircle.module.css'
import cs from 'classnames'

const CreateCircle = props => {
    const { open, onClose, onSubmit, onCancel, isUIDisabled, isLoading, errorMsg } = props

    const [cName, setCName] = useState('')

    const styledModal = {
        modal: {
            background: '#fff',
            padding: 0,
            borderRadius: '10px',
            maxWidth: '500px',
            width: '100%',
            minHeight: '200px'
        },
        closeButton: {
            display: 'none',
        },
    }

    const clear = () => {
        setCName('')
    }

    return (
        <Modal open={open} onClose={onClose} center styles={styledModal}>
            <div className="my-5 d-flex flex-column h-100">
                <div className="d-flex flex-column justify-content-center flex-grow-1">
                    <div className="row">
                        <div className="col-12">
                            <div className={cs(styles.formWrapper, 'mx-auto')}>
                                <div className={styles.form}>

                                    <div className="my-5 text-center">
                                        <div className="row">
                                            <div className={cs('col-12', styles.red)}>
                                                {errorMsg === ''
                                                    ? <></>
                                                    : <>{errorMsg}</>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cs(styles.formInputWrapper)}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className={styles.inputWrapper}>
                                                    <input
                                                        name="cName"
                                                        type="text"
                                                        value={cName}
                                                        onChange={(e)=> setCName(e.target.value)}
                                                        placeholder={'circle name...'}
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
                                                <button type="submit" onClick={() => onSubmit(cName, clear)} className={styles.submitBtn} disabled={isUIDisabled}>
                                                    <span>
                                                        {isLoading
                                                            ? <span className="spinner-border spinner-border-sm float-left mt-1" role="status" aria-hidden="true"></span>
                                                            : <></>
                                                        }
                                                        <span style={{ verticalAlign: 'text-top' }}>create</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-wrapper text-center">
                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" onClick={onCancel} className={styles.submitBtn} disabled={isUIDisabled}>
                                                    <span>
                                                        <span style={{ verticalAlign: 'text-top' }}>cancel</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default CreateCircle