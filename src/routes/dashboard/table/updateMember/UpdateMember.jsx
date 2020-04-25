import React from 'react'
import Modal from 'react-responsive-modal'
import styles from './UpdateMember.module.css'
import cs from 'classnames'

const UpdateMember = props => {
    const { open, onClose, onSubmit, onCancel, isUIDisabled, isLoading, errorMsg, name, number, OnChangeName, onChangeNumber } = props

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

    return (
        <Modal open={open} onClose={onClose} center styles={styledModal}>
            <div className={cs(styles.header)}>edit member</div>
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

                                    <div className={cs(styles.formInputWrapper)}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className={styles.inputWrapper}>
                                                    <input
                                                        name="mName"
                                                        type="text"
                                                        value={name}
                                                        onChange={ e => OnChangeName(e.target.value)}
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
                                                        value={number}
                                                        onChange={ e => onChangeNumber(e.target.value)}
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
                                                <button type="submit" onClick={() => onSubmit()} className={styles.submitBtn} disabled={isUIDisabled}>
                                                    <span>
                                                        {isLoading
                                                            ? <span className="spinner-border spinner-border-sm float-left mt-1" role="status" aria-hidden="true"></span>
                                                            : <></>
                                                        }
                                                        <span style={{ verticalAlign: 'text-top' }}>update</span>
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


export default UpdateMember