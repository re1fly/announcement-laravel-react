import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import UserDisplay from "../components/UserDisplay";




class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/admin-dashboard' component={Dashboard} />
                    <Route exact path='/display-announcement' component={UserDisplay} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
