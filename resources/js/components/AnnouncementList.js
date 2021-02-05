import React, {Component, useState} from 'react';
import DashboardTemplate from "../containers/templates/Dashboard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardContent,
    CardHeader,
    TextField
} from "@material-ui/core";
import {authOptions, getAllAnnouncement} from "../utils/Api";
import {getAccessToken} from "../utils/Token";
import ReactHtmlParser from "react-html-parser";
import dateFormat from 'dateformat';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import swal from "sweetalert";
import {DELETE_ANNOUNCEMENT, GET_ID_ANNOUNCEMENT} from "../utils/ApiUrl";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";


function DeleteAnnouncement(props) {

    const handleDelete = (announcementId) => {
        const data = {
            'announcement_id': announcementId
        }
        axios.delete(DELETE_ANNOUNCEMENT(props.id), data, authOptions).then(response => {
            if (response.status === 200) {
                swal({
                    title: "Done!",
                    text: "Delete Announcement Successfully",
                    icon: "success",
                })

            }
        }).catch((error) => {
                if (error.response) {
                    swal({
                        title: "Error!",
                        text: (error.message),
                        icon: "error",
                        dangerMode: true,
                    })
                }

            }
        )
    }
    return (
        <DeleteIcon fontSize="inherit" onClick={() => {
            handleDelete(props.id);
        }}/>
    )
}


class AnnouncementList extends Component {
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
            console.log(response.data.data);
            this.setState({
                announcementList: response.data.data
            })
        })
    }


    render() {
        const {announcementList} = this.state
        return (
            <DashboardTemplate>
                <div>
                    <Typography variant="h4" style={{textAlign: 'center'}}> Announcement List</Typography>
                    <Box mb={5}/>
                    {announcementList.map(item => (
                        <Card
                            style={{marginBottom: '15px'}}
                            key={item.id}
                        >
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    style={{backgroundColor: 'black', color : 'white'}}
                                >
                                    <Typography variant="h5" style={{textTransform: 'Capitalize'}}
                                                gutterBottom>{item.title}</Typography>
                                    <Typography style={{marginLeft: '15px', marginTop: '5px', fontSize: '12px'}}
                                                gutterBottom>( {dateFormat(item.created_at, "dddd, mmmm dS, yyyy, hh::mm:ss")} )</Typography>
                                    <IconButton
                                        style={{color: 'red', position: 'absolute', right: '2%', bottom: '15%'}}>
                                        <DeleteAnnouncement key={item.id} id={item.id} announcement={announcementList}>
                                        </DeleteAnnouncement>
                                    </IconButton>
                                    <IconButton
                                        component={NavLink} to={"/edit-announcement/" + item.id}
                                        style={{color: '#F9C900', position: 'absolute', right: '5%', bottom: '15%'}}>
                                        <EditIcon fontSize="inherit"/>
                                    </IconButton>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Card style={{width: '100%', height: '100%', border: 'none', boxShadow: "none"}}>
                                        {ReactHtmlParser(item.content)}
                                    </Card>
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    ))}
                </div>
            </DashboardTemplate>
        );
    }
}

export default AnnouncementList;
