import React, { Component } from 'react'
import styles from './Table.module.css'
import Row from './row/Row'
import { updateMember, deleteMember } from '../../../api/Circle'
import UpdateMember from './updateMember/UpdateMember'
import DeleteMember from './deleteMember/DeleteMember'

class Table extends Component {

    state = {
        members: [],
        selectedMember: {},
        nameToUpdate: '',
        numberToUpdate: '',
        isUpdateMemberOpen: false,
        isUMLoading: false,
        isUMUIDisabled: false,
        errorUMMsg: '',
        isDeleteMemberOpen: false,
        isDMLoading: false,
        isDMUIDisabled: false,
    }

    componentDidMount = () => {
        console.log(`Table -> componentDidMount`)
        this.setState({ members: this.props.members })

    }

    componentDidUpdate = async (prevProps, prevState, snapshot) => {
        console.log(`Table -> componentDidUpdate`)

        if (this.state.members !== this.props.members) {
            this.setState({ members: this.props.members })
        }
    }

    openUpdateMember = m => {
        console.log('openUpdateMember: ' + JSON.stringify(m));
        this.setState({
            selectedMember: m,
            nameToUpdate: m.name,
            numberToUpdate: m.number,
            isUpdateMemberOpen: true
        })
    }

    OnChangeName = e => {
        this.setState({ nameToUpdate: e })
    }

    onChangeNumber = e => {
        this.setState({ numberToUpdate: e })

    }

    handleCloseUpdateMember = () => {
        console.log('modale UpdateMember closed')
    }

    handleCancelUpdateMember = () => {
        console.log('modale UpdateMember closed')
        this.setState({ isUpdateMemberOpen: false })
    }

    openDeleteMember = m => {
        this.setState({
            selectedMember: m,
            nameToUpdate: m.name,
            numberToUpdate: m.number,
            isDeleteMemberOpen: true
        })
    }

    handleCloseDeleteMember = () => {
        console.log('modale handleCloseDeleteMember closed')
    }

    handleCancelDeleteMember = () => {
        console.log('modale DeleteMember closed')
        this.setState({ isDeleteMemberOpen: false })
    }

    handelUpdate = () => {
        console.log('handelUpdate: ' + this.state.nameToUpdate + ' ' + this.state.numberToUpdate)
    }

    handelDelete = m => {
        console.log('handelDelete: ' + this.state.nameToUpdate + ' ' + this.state.numberToUpdate)
    }

    render() {
        const members = this.state.members

        return (
            <>
                <UpdateMember
                    open={this.state.isUpdateMemberOpen}
                    onClose={this.handleCloseUpdateMember}
                    onCancel={this.handleCancelUpdateMember}
                    onSubmit={this.handelUpdate}
                    isLoading={this.state.isUMLoading}
                    isUIDisabled={this.state.isUMUIDisabled}
                    errorMsg={this.state.errorUMMsg}
                    name={this.state.nameToUpdate}
                    number={this.state.numberToUpdate}
                    OnChangeName={this.OnChangeName}
                    onChangeNumber={this.onChangeNumber}
                />

                <DeleteMember
                    open={this.state.isDeleteMemberOpen}
                    onClose={this.handleCloseDeleteMember}
                    onCancel={this.handleCancelDeleteMember}
                    onSubmit={this.handelDelete}
                    isLoading={this.state.isDMLoading}
                    isUIDisabled={this.state.isDMUIDisabled}
                    name={this.state.nameToUpdate}
                    number={this.state.numberToUpdate}
                />

                <table className="table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>number</th>
                            <th>options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((m, i) => {
                            return <Row key={i} member={m} onUpdate={() => this.openUpdateMember(m)} onDelete={() => this.openDeleteMember(m)} />
                        })}
                    </tbody>
                </table>
            </>
        )
    }

}

export default Table