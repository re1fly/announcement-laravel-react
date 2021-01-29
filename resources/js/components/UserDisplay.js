import React, { Component } from 'react';

export default class UserDisplay extends Component {
    constructor() {
        super();
        this.state = {
            message:[]
        };
    }

    componentDidMount()
    {
        console.log("Mounted component message");
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher('6d997cb2a1d07ded5b9d', {
            cluster: 'ap1',
            forceTLS: true
        });
        const this2 = this
        var channel = pusher.subscribe('channel-announcement');
        channel.bind('event-pusher', function(data) {
            const message = this2.state.message
            message.push(data.data)
            this2.setState({message:message})
        });
    }

    render() {
        return (
            <div className="container">
                <h3>TEST WEBSOCKET PUSHER</h3>
                {
                    this.state.message.map((msg)=>{
                        return(
                            <p> <b>{msg.user} </b> : {msg.message}</p>
                        )
                    })
                }
            </div>
        );
    }
}
