import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../pages/admin/Login";
import Register from "../pages/admin/Register";
import CreateAnnouncement from "../pages/admin/CreateAnnouncement";
import EditAnnouncement from "../pages/admin/EditAnnouncement";
import DisplayList from "../pages/admin/DisplayList";
import UserDisplay from "../pages/user/UserDisplay";
import AnnouncementList from "../pages/admin/AnnouncementList";
import React from "react";

export const RouteApp = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route path='/create-announcement' component={CreateAnnouncement} />
                <Route path='/edit-announcement/:id' component={EditAnnouncement} />
                <Route path='/display-list' component={DisplayList} />
                <Route path='/display-announcement' component={UserDisplay} />
                <Route path='/announcement-list' component={AnnouncementList} />
            </Switch>
        </BrowserRouter>
    </>
)
