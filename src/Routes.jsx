import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { isLoggedIn } from './storage/local';
import { LOGIN_PATH, DASHBOARD_PATH, ROOT_PATH } from './config/routes';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Login from './routes/login/Login';
import Dashboard from './routes/dashboard/Dashboard';

const isAllowed = isLoggedIn

const Routes = () => (
    <Switch>
        <Route exact path={ROOT_PATH} render={() => <Redirect to={LOGIN_PATH} />} />
        <Route exact path={LOGIN_PATH} component={Login} />
        <PrivateRoute path={DASHBOARD_PATH} component={Dashboard} isAllowed={isAllowed} redirectTo={() => LOGIN_PATH} />
    </Switch>
);

export default Routes;
