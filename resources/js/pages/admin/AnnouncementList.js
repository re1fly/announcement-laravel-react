import React, {Component, useState} from 'react';
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import dateFormat from 'dateformat';

import Layout from "../../containers/templates/Layout";
import {getAllAnnouncement} from "../../utils/Api";

import Box from "@material-ui/core/Box";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Typography from "@material-ui/core/Typography";
import DeleteAnnouncement from "../../components/announcement/DeleteAnnouncement";


class AnnouncementList extends Component {
    _handleDeleteAnnouncementList = (key) => {
        this.setState((prevState, props) => {
            let newAnnouncementList = prevState.announcementList
            newAnnouncementList.splice(key, 1)
            return {
                announcementList: newAnnouncementList
            }
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            announcementList: [],
            title: '',
            content: ''

        }
    }

    componentDidMount() {
        getAllAnnouncement().then(response => {
            this.setState({
                announcementList: response.data.data
            })
        })
    }

    render() {
        const {announcementList} = this.state
        return (
            <Layout>
                <Typography variant="h4" style={{textAlign: 'center'}}> Announcement List</Typography>
                <Box mb={5}/>
                {announcementList.map((announcement, key) => (
                    <Card
                        style={{marginBottom: '15px'}}
                        key={announcement.id}
                    >
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{backgroundColor: 'black', color: 'white'}}>

                                <Typography variant="h5"
                                            style={{textTransform: 'Capitalize'}}
                                            gutterBottom>{announcement.title}
                                </Typography>
                                <Typography
                                    style={{
                                        marginLeft: '15px',
                                        marginTop: '5px',
                                        fontSize: '12px',
                                        color: '#F9C900'
                                    }} gutterBottom>(Created
                                    at {dateFormat(announcement.created_at, "dddd, mmmm dS, yyyy")})
                                </Typography>
                                <IconButton
                                    style={{color: 'red', position: 'absolute', right: '2%', bottom: '15%'}}>
                                    <DeleteAnnouncement key={key}
                                                        deleteAnnouncement={() => this._handleDeleteAnnouncementList(key)}
                                                        announcement={announcement}/>
                                </IconButton>
                                <IconButton
                                    component={NavLink}
                                    to={"/edit-announcement/" + announcement.id}
                                    style={{color: '#F9C900', position: 'absolute', right: '5%', bottom: '15%'}}>
                                    <EditIcon fontSize="inherit"/>
                                </IconButton>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Card style={{width: '100%', height: '100%', border: 'none', boxShadow: "none"}}>
                                    {ReactHtmlParser(announcement.content)}
                                </Card>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                ))}
            </Layout>
        );
    }
}

export default AnnouncementList;
