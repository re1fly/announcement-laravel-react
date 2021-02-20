import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../components/Login";
import UserDisplay from "../components/UserDisplay";
import Announcement from "../components/Announcement";
import DisplayList from "../components/DisplayList";
import AnnouncementList from "../components/AnnouncementList";
import Register from "../components/Register";
import EditAnnouncement from "../components/EditAnnouncement";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route path='/create-announcement' component={Announcement} />
                    <Route path='/edit-announcement/:id' component={EditAnnouncement} />
                    <Route path='/display-list' component={DisplayList} />
                    <Route path='/display-announcement' component={UserDisplay} />
                    <Route path='/announcement-list' component={AnnouncementList} />

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
