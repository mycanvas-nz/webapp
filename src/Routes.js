import React, { Component } from 'react'

import Dashboard from './containers/Dashboard'

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
            </Switch>
        )
    }
}
