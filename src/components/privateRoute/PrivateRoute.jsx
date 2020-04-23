import React from 'react'
import { Redirect, Route } from 'react-router-dom'

/**
 * Wraber to check if user has access to the private route
 */
const PrivateRoute = ({ component: Component, isAllowed, redirectTo, ...other }) => (
    <Route
        {...other}
        render={props =>
            isAllowed()
            ?   <Component {...props} />
            :   <Redirect to={{ pathname: redirectTo(), state: { from: props.location }, }} />
        }
    />
)

export default PrivateRoute
