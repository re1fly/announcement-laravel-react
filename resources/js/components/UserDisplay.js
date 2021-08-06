import React, {Component} from 'react';
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import {Card, Container, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {getUserId} from "../utils/UserId";
import {authOptions} from "../utils/Api";
import {GET_ANNOUNCEMENT_BY_USER} from "../utils/ApiUrl";
import PausePresentationIcon from '@material-ui/icons/PausePresentation';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class UserDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcement: [],
            is_active: [],
            delay: 0,
        };
    }

    componentDidMount() {
        axios.get(GET_ANNOUNCEMENT_BY_USER(getUserId), authOptions).then(response => {
            console.log('response', response)
            const data = response.data.data || []
            this.setState((prevState) => {

                return {
                    announcement: data,
                    delay: data.length >= 1 ? data[0].user.delay_time : 0,
                    is_active: data.length >= 1 ? data[0].user.is_active : 0
                }
            })
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
                console.log('success set user: ', data.data.user)
                if (data.data.is_active != null) {
                    this2.setState({is_active: data.data.is_active})
                } else if (data.data.announcement != null) {
                    this2.setState({announcement: data.data.announcements})
                }
                location.reload();
            }
        })

        setTimeout(function () { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 1000)

    }

    render() {
        const {announcement, delay, is_active} = this.state;
        return (
            <Card style={{
                border: 'none',
                boxShadow: 'none',
                width: '100%',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
            }}>
                <OwlCarousel items={1} loop={true} autoplay={true} autoplayTimeout={delay}>
                    {announcement.map(item => (
                        <div className='item' key={item.announcement_id}>
                            {item.user.is_active === null ?
                                null : is_active === 1 ? announcement &&
                                    <div key={item.announcement_id}>{ReactHtmlParser(item.announcement.content)}</div>
                                    : <PausePresentationIcon
                                        style={{
                                            textAlign: 'center',
                                            marginTop: '25%',
                                            marginLeft: '47.5%',
                                            fontSize: '90px'
                                        }}/>
                            }
                        </div>
                    ))}
                </OwlCarousel>
            </Card>

        );
    }
}
