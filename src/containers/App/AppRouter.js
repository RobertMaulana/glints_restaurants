import React from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from '../../helpers/AsyncFunc'
import NotFound from '../404'

const routes = [
    {
      path: '',
      component: asyncComponent(() => import('../Home')),
      icon: ''
    }
]

class AppRouter extends React.Component {
    render() {
        const { url } = this.props
        return (
            <Switch>
                {routes.map(singleRoute => {
                    const { path, exact, component } = singleRoute
                    let route = (
                        <Route
                            exact={exact !== false}
                            key={path}
                            path={`${url}${path}`}
                            render={props => React.createElement(component, props)}
                        />
                    )
                    return [route]
                })}
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default AppRouter