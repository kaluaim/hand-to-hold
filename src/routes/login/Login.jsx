import React, { Component } from 'react'
import styles from './Login.module.css'
import { withRouter } from 'react-router-dom'
import { login, verifyOTP } from '../../api/Auth'
import { setUserToken } from '../../storage/local'
import cs from 'classnames'
import OTP from './otp/OTP'
import { DASHBOARD_PATH } from '../../config/routes'

class Login extends Component {
    state = {
        phone: '',
        otp: '',
        isUIDisabled: false,
        isLoading: false,
        isOTPLoading: false,
        errorMsg: '',
        isOTPOpen: false,
        OTPMsg: '',
        errorOTPMsg: '',
    }

    numReg = new RegExp('\\d')

    handleSubmit = async () => {
        console.log(this.state.phone)
        // disable UI and show spanner
        this.setState({
            isUIDisabled: true,
            isLoading: true,
        })
        // post to backend to login and send sms (otp)
        const r = await login(this.state.phone)
        console.log(r)

        if (r.status === 200) {
            // show modal to submit otp
            this.setState({
                isOTPOpen: true,
                OTPMsg: r.message,
                isLoading: false,
                isUIDisabled: false,
            })
            return
        }

        this.setState({
            errorMsg: "Error: " + r.message,
            isUIDisabled: false,
            isLoading: false,
        })
    }

    handleChange = (e) => {
        // TODO: fix insert only numbers
        if (this.numReg.test(e.target.value)) {
            this.setState({ phone: e.target.value })
        }
    }

    handleOTPChange = (e) => {
        // TODO: fix insert only numbers
        if (this.numReg.test(e.target.value)) {
            this.setState({ otp: e.target.value })
        }
    }

    handleVerifyOTP = async () => {

        this.setState({
            isUIDisabled: true,
            isOTPLoading: true,
        })

        // post otp to backend
        const r = await verifyOTP(this.state.otp)
        console.log(r)

        if (r.status === 200) {
            // save token
            setUserToken(r.token)
            // push user to dashboard
            this.props.history.push(DASHBOARD_PATH)
            return
        }

        this.setState({
            errorOTPMsg: "Error: " + r.message,
            isUIDisabled: false,
            isOTPLoading: false,
        })

    }

    handleCloseOTP = () => {
        console.log('modale otp closed')
    }

    handleCancelOTP = () => {
        this.setState({
            isUIDisabled: false,
            isLoading: false,
            isOTPOpen: false,
            OTPMsg: '',
        })
    }

    render() {
        return (
            <div className={cs(styles.root, 'row')}>

                <OTP
                    open={this.state.isOTPOpen}
                    onClose={this.handleCloseOTP}
                    onSubmit={this.handleVerifyOTP}
                    onCancel={this.handleCancelOTP}
                    otp={this.state.otp}
                    onChange={this.handleOTPChange}
                    message={this.state.OTPMsg}
                    isUIDisabled={this.state.isUIDisabled}
                    isLoading={this.state.isOTPLoading}
                    errorMsg={this.state.errorOTPMsg}
                />

                <div className={cs('col-lg-6')}>

                    <div className="d-flex flex-column h-100">
                        <div className="d-flex flex-column justify-content-center flex-grow-1">
                            <div className="row">
                                <div className="col-12">
                                    <div className={cs(styles.formWrapper, 'mx-auto')}>
                                        <div className={styles.form}>

                                            <div className="my-5 text-center">
                                                <div className="row">
                                                    <div className={cs('col-12', styles.red)}>
                                                        {this.state.errorMsg === ''
                                                            ? <></>
                                                            : <>{this.state.errorMsg}</>
                                                        }
                                                    </div>
                                                </div>
                                            </div>


                                            <div className={cs(styles.formInputWrapper)}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className={styles.inputWrapper}>
                                                            <input
                                                                name="phone"
                                                                type="text"
                                                                value={this.state.phone}
                                                                onChange={this.handleChange}
                                                                placeholder={'phone number...'}
                                                                className={styles.formInput}
                                                                maxLength="500"
                                                                disabled={this.state.isUIDisabled}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="btn-wrapper text-center">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <button type="submit" onClick={this.handleSubmit} className={styles.submitBtn} disabled={this.state.isUIDisabled}>
                                                            <span>
                                                                {this.state.isLoading
                                                                    ? <span className="spinner-border spinner-border-sm float-left mt-1" role="status" aria-hidden="true"></span>
                                                                    : <></>
                                                                }
                                                                <span style={{ verticalAlign: 'text-top' }}>log in</span>
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

                </div>

                <div className={cs(styles.rootContent, 'col-lg-6')}>
                    <div className="d-flex flex-column h-100">
                        <div className="d-flex flex-column justify-content-center flex-grow-1">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className={styles.logo} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(Login)
