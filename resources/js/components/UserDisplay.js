import React, {Component} from 'react';
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import {Card, Container} from "@material-ui/core";
import {getUserId} from "../utils/UserId";
import {authOptions} from "../utils/Api";
import {GET_ANNOUNCEMENT_BY_USER} from "../utils/ApiUrl";
import PausePresentationIcon from '@material-ui/icons/PausePresentation';


export default class UserDisplay extends Component {
    constructor() {
        super();
        this.state = {
            announcement: null,
            is_active: null,
        };
    }

    componentDidMount() {
        axios.get(GET_ANNOUNCEMENT_BY_USER(getUserId), authOptions).then(response => {
            if (response.data.data.user.is_active === 1) {
                this.setState({
                    announcement: {content: response.data.data.announcement.content},
                    is_active: 1
                })
            } else if (response.data.data.user.is_active === 0) {
                this.setState({
                    announcement: '',
                    is_active: 0
                })
            }
        });
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        let pusher = new Pusher('6d997cb2a1d07ded5b9d', {
            cluster: 'ap1',
            forceTLS: true,
            auth: authOptions,
            authEndpoint: 'broadcasting/auth',
        });
        const this2 = this
        let channel = pusher.subscribe('channel-announcement');
        channel.bind('event-pusher', function (data) {
            if (localStorage.getItem('user_id') === data.data.user) {
                if (data.data.is_active != null) {
                    this2.setState({is_active: data.data.is_active})
                } else if (data.data.announcement != null) {

                    this2.setState({announcement: data.data.announcement})

                }
            }
        })

        console.log('display')
        console.log(Echo)

        setTimeout(function () { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 1000)

        Echo.join('channel-announcement')
            // .here((user) => {
            //     this.state.announcement = user
            // })
            .joining((user) => {
                axios.put('/api/user/' + user.id + '/online', authOptions, {}).then(response => {
                    console.log(response)
                })
            })
            .leaving((user) => {
                axios.put('/api/user/' + user.id + '/offline', authOptions, {}).then(response => {
                    console.log(response)
                })
            })
            .listen('UserOnline', (user) => {
                console.log('this display already listened')
            })
    }


    render() {
        const {announcement, is_active} = this.state;
        return (
            <Card style={{border: 'none', boxShadow: 'none', width: '100%', height: '100vh'}}>

                {is_active === null ?
                    <div></div> : is_active === 1 ? announcement && <div>{ReactHtmlParser(announcement.content)}</div>
                        : <PausePresentationIcon
                            style={{textAlign: 'center', marginTop: '25%', marginLeft: '47.5%', fontSize: '90px'}}/>
                }

            </Card>

        );
    }
}
