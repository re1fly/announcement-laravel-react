import React, { Component } from 'react';
import axios from "axios";

export default class UserDisplay extends Component {
    constructor() {
        super();
        this.state = {
            message: null
        };
    }

    componentDidMount()
    {   const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('access_token');
        axios.get(`http://localhost:8000/api/auth/announcement/get-by-user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
             this.setState({
                 message: {announcement : {content : response.data.data.content}}
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
        channel.bind('event-pusher', function(data) {
            if(localStorage.getItem('user_id') === data.data.user){
                this2.setState({message: data.data})
            }
        });
    }

    render() {
        console.log(this.state.message);
        return (
            <div className="container">
                <h3>ANNOUNCEMENT</h3>
                {
                   this.state.message &&  <p>{this.state.message.announcement.content}</p>
                }
            </div>
        );
    }
}
