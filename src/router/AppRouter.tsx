import React, { Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import App from '../App'
import List from '../pages/List'

export default class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/list" exact component={List}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
