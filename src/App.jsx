import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import styles from './App.module.css'
import Menu from './components/menu/Menu'

class App extends Component {
    render() {
        return (
            <Router>
                <div className={styles.root}>
                    <div className={styles.content}>
                        <Menu />
                        <Routes />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
