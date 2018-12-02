import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './containers/App'
import Signup from './containers/Signup'
import Signin from './containers/Signin'

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
                <Route
                    exact
                    path={'/signin'}
                    render={() => <Signin />}
                />
                <RestrictedRoute
                    path='/'
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
