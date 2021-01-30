import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../components/Login";
import UserDisplay from "../components/UserDisplay";
import Announcement from "../components/Announcement";
import DisplayList from "../components/DisplayList";




class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route path='/create-announcement' component={Announcement} />
                    <Route path='/display-list' component={DisplayList} />
                    <Route path='/display-announcement' component={UserDisplay} />

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
