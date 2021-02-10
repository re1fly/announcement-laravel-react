import React, {Component} from 'react';
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import {Card, Container} from "@material-ui/core";
import {getUserId} from "../utils/UserId";
import {authOptions} from "../utils/Api";
import {GET_ANNOUNCEMENT_BY_USER} from "../utils/ApiUrl";


export default class UserDisplay extends Component {
    constructor() {
        super();
        this.state = {
            message: null
        };
    }

    componentDidMount() {

        axios.get(GET_ANNOUNCEMENT_BY_USER(getUserId), authOptions).then(response => {
            console.log(response)
            this.setState({
                message: {announcement: {content: response.data.data.content}}
            })
        })
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher('6d997cb2a1d07ded5b9d', {
            cluster: 'ap1',
            // forceTLS: true
        });
        const this2 = this
        var channel = pusher.subscribe('channel-announcement');
        channel.bind('event-pusher', function (data) {
            if (localStorage.getItem('user_id') === data.data.user) {
                this2.setState({message: data.data})
            }
        });
    }

    render() {
        const {message} = this.state
        return (
            <Card style={{border : 'none',  boxShadow: 'none', width: '1920px', height: '1080px'}}>
                {
                    message && <div>{ReactHtmlParser(message.announcement.content)}</div>
                }
            </Card>
        );
    }
}
