import React from 'react'
import { DASHBOARD_PATH, isPublicRoute, LOGIN_PATH, PROFILE_PATH } from '../../config/routes'
import { Link, withRouter } from 'react-router-dom'
import styles from '../menu/Menu.module.css'
import cs from 'classnames'

const Menu = props => {
    let showMenu = !isPublicRoute()

    const logout = () => {
        props.history.push(LOGIN_PATH)
    }

    const dashboardMenuItem = (
        <div key="dashboardMenuItem" className="row">
            <div className="col">
                <div className={styles.menuItemContainer}>
                    <Link
                        to={DASHBOARD_PATH}
                        className={DASHBOARD_PATH === window.location.pathname ? cs(styles.menuItemContainer, styles.menuItemSelected) : styles.menuItemContainer}
                    >
                        <div className={cs(styles.dashboardItem, styles.icnContainer, styles.tooltip)} data-tooltip="dashboard">
                            <span className={styles.dashboardIcn} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )

    const profileMenuItem = (
        <div key="myProfileMenuItem" className="row">
            <div className="col">
                <div className={styles.menuItemContainer}>
                    <Link
                        to={PROFILE_PATH}
                        className={
                            PROFILE_PATH === window.location.pathname
                                ? cs(styles.menuItemContainer, styles.menuItemSelected)
                                : styles.menuItemContainer
                        }
                    >
                        <div className={cs(styles.myProfileItem, styles.icnContainer, styles.tooltip)} data-tooltip="my Profile">
                            <span className={styles.myProfileIcn} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )


    let currentMenuItems = [dashboardMenuItem, profileMenuItem]

    return showMenu
    ?   <header className={styles.root}>
            <div className={styles.sidebar}>
                <div className="d-flex flex-column h-100">
                    <div className={styles.logo} />
                    <div className="d-flex flex-column justify-content-center flex-grow-1">{currentMenuItems}</div>
                    <div className={styles.logout} onClick={logout}>
                        <span className={styles.logoutIcon} />
                    </div>
                </div>
            </div>
        </header>
    :   <></>
    
}

export default withRouter(Menu)
