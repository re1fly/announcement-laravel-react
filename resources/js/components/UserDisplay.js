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
import handleSelectDelay from './DisplayList';


export default class UserDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcement: null,
            is_active: null,
            delay: 0,
        };
    }

    componentDidMount() {
        axios.get(GET_ANNOUNCEMENT_BY_USER(getUserId), authOptions).then(response => {
            if (response.data.data.user.is_active === 1) {
                this.setState({
                    announcement: {content: response.data.data.announcement.content},
                    delay: response.data.data.delay_time,
                    is_active: 1
                })
            } else if (response.data.data.user.is_active === 0) {
                this.setState({
                    announcement: '',
                    delay: 0,
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
                console.log('DATA USER : ', data)
                // else if(data.data.delay_time != null){
                //     this2.setState({delay_time: delay})
                // }
                // location.reload();

            }
        })

        console.log(Echo)

        setTimeout(function () { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 1000)

       /* Echo.join('channel-announcement')
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
            })*/


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

                {/*<FormControl style={{*/}
                {/*    minWidth: 120,*/}
                {/*}}>*/}
                {/*    <InputLabel id="display-delay-label">Delay Display</InputLabel>*/}
                {/*    <Select*/}
                {/*        labelId="display-delay-label"*/}
                {/*        id="select-display-delay"*/}
                {/*        open={open}*/}
                {/*        onClose={handleClose}*/}
                {/*        onOpen={handleOpen}*/}
                {/*        value={delay}*/}
                {/*        onChange={handleChange}*/}
                {/*    >*/}
                {/*        <MenuItem value="">*/}
                {/*            <em>None</em>*/}
                {/*        </MenuItem>*/}
                {/*        <MenuItem vassad{30000}>30 sec</MenuItem>*/}
                {/*        <MenuItem value={60000}>1 min</MenuItem>*/}
                {/*        <MenuItem value={180000}>3 min</MenuItem>*/}
                {/*    </Select>*/}
                {/*</FormControl>*/}
                    <OwlCarousel items={1} loop={true} autoplay={true} autoplayTimeout={delay}>

                        <div className='item'>
                            <img
                                src='https://images.unsplash.com/photo-1552872673-9b7b99711ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
                                style={{width: '100%', height: '100vh'}} alt="img1"/>
                        </div>
                        <div className='item'>
                            <img
                                src='https://images.unsplash.com/photo-1553367989-1f8a5d29ee08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
                                style={{width: '100%',height: '100vh'}} alt="img1"/>
                        </div>
                        <div className='item'>
                            {is_active === null ?
                                <div></div> : is_active === 1 ? announcement &&
                                    <div>{ReactHtmlParser(announcement.content)}</div>
                                    : <PausePresentationIcon
                                        style={{
                                            textAlign: 'center',
                                            marginTop: '25%',
                                            marginLeft: '47.5%',
                                            fontSize: '90px'
                                        }}/>
                            }
                        </div>
                    </OwlCarousel>
            </Card>

        );
    }
}
