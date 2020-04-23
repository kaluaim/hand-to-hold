import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from './Dashboard.module.css'
import List from './list/List'
import Table from './table/Table'
import { fetch, addMember } from '../../api/Circle'
import AddMember from './addMember/AddMember'
import cs from 'classnames'

class Dashboard extends Component {

    state = {
        selectedCircleID: '',
        circle: {members: []},
        isAddMemberOpen: false,
        isAMLoading: false,
        isAMUIDisabled: false,
        errorAMMsg: '',
    }

    componentDidMount = async () => {
        console.log(`Dashboard -> componentDidMount`)
    }

    componentDidUpdate = async (prevProps, prevState, snapshot) => {
        console.log(`Dashboard -> componentDidUpdate`)
        console.log(this.state.circle)
    }

    handleSelecteCircle = async (id) => {
        console.log('handleSelecteCircle: ' + id)
        this.setState({ selectedCircleID: id })

        // fetch circle data
        let c = await fetch(id)

        if (c.status === 200) {
            this.setState({ circle: c.data })
        }

        // TODO: handle error

    }

    openAddMember = () => {
        this.setState({isAddMemberOpen: true})
    }

    handleCloseAddMember = () => {
        console.log('modale AddMember closed')
    }

    handleCancelAddMember = () => {
        console.log('modale AddMember closed')
        this.setState({ isAddMemberOpen: false })
    }

    handleAddMember = async (name, number, clear) => {
        console.log('handleAddMember:')
        console.log(name)
        console.log(number)

        this.setState({
            isAMLoading: true,
            isAMUIDisabled: true,
        })

        let c = await addMember(this.state.circle, {name, number})
        console.log('this is c')
        console.log(c);
        

        this.setState({ 
            isAddMemberOpen: false,
            isAMLoading: false,
            isAMUIDisabled: false,
         })

         clear()
        
    }

    render() {
        const c = this.state.circle

        return (
            <div className={styles.root}>
                <AddMember
                    open={this.state.isAddMemberOpen}
                    onClose={this.handleCloseAddMember}
                    onCancel={this.handleCancelAddMember}
                    onSubmit={this.handleAddMember}
                    isLoading={this.state.isAMLoading}
                    isUIDisabled={this.state.isAMUIDisabled}
                    errorMsg={this.state.errorAMMsg}
                />

                <div className="container-fluid">
                    <div className="row">

                        <div className='isOpen'>
                            <div>
                                <List selectedCircle={this.state.selectedCircleID} onSelect={this.handleSelecteCircle} />
                            </div>
                        </div>

                        <div className={'openSideMenu'}>
                            
                            { this.state.circle === undefined || Object.keys(this.state.circle).length === 1 
                                ? <></>
                                : <main>
                                    <div className="row">
                                        <div className={styles.main}>
                                            <h3 className={styles.title}>{c.name}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className={cs('btn', styles.addButton, 'mb-3')} onClick={this.openAddMember}><i className="fas fa-plus"></i> add member</button>
                                    </div>
                                    <div className="row">
                                        <Table members={this.state.circle.members}/>
                                    </div>
                                </main>
                            }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)
