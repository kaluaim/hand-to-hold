import React, { Component } from 'react'
import styles from './List.module.css'
import ListItem from '../listItem/ListItem'
import CreateCircle from './createCircle/CreateCircle'
import cs from 'classnames'
import { fetchAll,  create } from '../../../api/Circle'

class List extends Component {

    state = {
        circles: [],
        isCreateCircleOpen: false,
        isCCLoading: false,
        isCCUIDisabled: false,
        errorCCMsg: '',
    }

    componentDidMount = async () => {
        console.log(`List -> componentDidMount`)
        // fetch circle
        this.reload()
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log('List -> componentDidUpdate')

    }

    reload = async () => {
        const c = await fetchAll()
        console.log(c)


        if (c.status === 200) {
            this.setState({ circles: c.data })
            return
        }

        // TODO: handel error
        // mabay show reload button?
    }

    openCreateCircle = () => {
        this.setState({ isCreateCircleOpen: true })
    }

    handleCloseCreateCircle = () => {
        console.log('modale CreateCircle closed')
    }

    handleCancelCreateCircle = () => {
        console.log('modale CreateCircle closed')
        this.setState({ isCreateCircleOpen: false })
    }

    handleCreateCreateCircle = async (name, clear) => {
        console.log('handleCreateCreateCircle:')
        console.log(name)

        if (name === '') {
            this.setState({
                errorCCMsg: 'circle name is required!'
            })
            
            return
        }

        this.setState({
            isCCLoading: true,
            isCCUIDisabled: true,
        })

        let c = await create({name})
        console.log('this is c')
        
        console.log(c)
        
        if (c.status === 200) {
            this.reload()
            this.setState({ 
                isCreateCircleOpen: false,
                isCCLoading: false,
                isCCUIDisabled: false,
            })

            this.props.onSelect(c.data.id)
            clear()
            return
        }

        // re-get all circles
        // close modal

        // other?
        // show error msg
        // re-open UI and stop loading

        
    }

    render() {

        return (
            <div className={cs(styles.root)}>

                <CreateCircle
                    open={this.state.isCreateCircleOpen}
                    onClose={this.handleCloseCreateCircle}
                    onCancel={this.handleCancelCreateCircle}
                    onSubmit={this.handleCreateCreateCircle}
                    isLoading={this.state.isCCLoading}
                    isUIDisabled={this.state.isCCUIDisabled}
                    errorMsg={this.state.errorCCMsg}
                />

                <div className={styles.topArea}>
                    <button className={cs('btn', styles.addButton)} onClick={this.openCreateCircle}><i className="fas fa-plus"></i> new circle</button>
                </div>
                <div className={cs(styles.listArea, styles.hasFilter)}>
                    {this.state.circles.map((c, i) => {
                        return <ListItem key={i} id={c.id} name={c.name} selected={c.id === this.props.selectedCircle ? true : false} onSelect={this.props.onSelect} />
                    })}
                </div>
            </div>
        )
    }
}

export default List
