import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/dashboard' component={Dashboard} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
