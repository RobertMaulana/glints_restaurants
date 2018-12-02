import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// import Header from './components/Header/header'
// import asyncComponent from './helpers/AsyncFunc'
import App from './containers/Home'
import Signup from './containers/Signup'

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signup',
                            state: { from: props.location }
                        }}
                    />
                )
            )}
        />
    )
}

const PublicRoutes = ({ isLoggedIn }) => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={'/signup'}
                    render={() => <Signup />}
                />
                <RestrictedRoute
                    path="/"
                    component={App}
                    isLoggedIn={isLoggedIn}
                />
            </Switch>
        </Router>
    )
}

export default connect(state => ({
    isLoggedIn: state.Auth.idToken !== null
}))(PublicRoutes)
