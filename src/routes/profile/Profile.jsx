import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from './Profile.module.css'

class Profile extends Component {

    state = {}

    componentDidMount = async () => {
        console.log(`Dashboard -> componentDidMount`)
    }

    componentDidUpdate = async (prevProps, prevState, snapshot) => {
    }

    render() {

        return (
            <div className={styles.root}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile)
