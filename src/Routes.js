import React, { Component } from 'react'

import Dashboard from './containers/Dashboard'
import Settings from './containers/Settings'
import Apps from './containers/App';

import { Switch, Route } from 'react-router-dom';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                component={Dashboard}
                exact
                path="/"
                />
                <Route
                component={Settings}
                exact
                path="/settings"
                />
                <Route
                component={Apps}
                exact
                path="/apps"
                />
            </Switch>
        )
    }
}
