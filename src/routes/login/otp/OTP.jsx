import React from 'react'
import Modal from 'react-responsive-modal'
import styles from './OTP.module.css'
import cs from 'classnames'

const OTP = props => {
    const { otp, onChange, open, onClose, onSubmit, onCancel, message, isUIDisabled, isLoading, errorMsg } = props

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
            <div className={cs(styles.header)}>verify OTP</div>
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
                                                    {message}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={onSubmit}>
                                        <div className={cs(styles.formInputWrapper)}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className={styles.inputWrapper}>
                                                        <input
                                                            name="phone"
                                                            type="text"
                                                            value={otp}
                                                            onChange={onChange}
                                                            placeholder={'otp...'}
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
                                                    <button type="submit" className={styles.submitBtn} disabled={isUIDisabled}>
                                                        <span>
                                                            {isLoading
                                                                ? <span className="spinner-border spinner-border-sm float-left mt-1" role="status" aria-hidden="true"></span>
                                                                : <></>
                                                            }
                                                            <span style={{ verticalAlign: 'text-top' }}>verify</span>
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

export default OTP