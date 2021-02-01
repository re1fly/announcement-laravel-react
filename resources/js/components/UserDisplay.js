import React, {Component} from 'react';
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import {Container} from "@material-ui/core";
import {getUserId} from "../utils/UserId";
import {getAccessToken} from "../utils/Token";

export default class UserDisplay extends Component {
    constructor() {
        super();
        this.state = {
            message: null
        };
    }

    componentDidMount() {
        {
            getUserId
        }
        {
            getAccessToken
        }
        axios.get(`http://localhost:8000/api/announcement/get-by-user/${getUserId}`, {
            headers: {
                'Authorization': `Bearer ${getAccessToken}`
            }
        }).then(response => {
            this.setState({
                message: {announcement: {content: response.data.data.content}}
            })
        })
        console.log("Mounted component message");
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
            <Container fixed>
                {
                    message && <div>{ReactHtmlParser(message.announcement.content)}</div>
                }
            </Container>
        );
    }
}
