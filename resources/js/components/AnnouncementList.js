import React, {Component, useState} from 'react';
import DashboardTemplate from "../containers/templates/Dashboard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader} from "@material-ui/core";
import {authOptions, getAllAnnouncement} from "../utils/Api";
import {getAccessToken} from "../utils/Token";
import ReactHtmlParser from "react-html-parser";
import dateFormat from 'dateformat';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import swal from "sweetalert";
import Swal from 'sweetalert2';
import {DELETE_ANNOUNCEMENT, GET_ID_ANNOUNCEMENT} from "../utils/ApiUrl";

function DeleteAnnouncement(props) {

    const handleDelete = (announcementId) => {
        const data = {
            'announcement_id': announcementId
        }
        {
            getAccessToken
        }
        axios.delete(DELETE_ANNOUNCEMENT(props.id), data, {
            headers: {
                'Authorization': `Bearer ${getAccessToken}`
            },
        }).then(response => {
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

function GetAnnouncementById(props) {
    const handleEdit = (announcementId) => {
        const data = {
            'announcement_id': announcementId
        }
        axios.get(GET_ID_ANNOUNCEMENT(props.id), data, authOptions).then(response => {
            console.log(response)
            if (response.status === 200) {
                Swal.fire({
                    title: 'Edit Announcement',
                    html: `<input type="text" id="title" class="swal2-input" placeholder="Title">
                            <input type="text" id="content" class="swal2-input" placeholder="Content">`,
                    confirmButtonText: 'Save',
                    focusConfirm: false,
                    preConfirm: () => {
                        const title = Swal.getPopup().querySelector('#Title').value
                        const content = Swal.getPopup().querySelector('#content').value
                        if (!title || !content) {
                            Swal.showValidationMessage(`Please fill the form`)
                        }
                        return {title: title, content: content}
                    }
                }).then((result) => {
                    Swal.fire(`
                    Title: ${result.value.title}
                    Content: ${result.value.content}`.trim())
                })
            }
        }).catch((error) => {
                console.log(error.message);

            }
        )
    }
    return (
        <EditIcon fontSize="inherit" onClick={() => {
            handleEdit(props.id);
        }}/>
    )
}


class AnnouncementList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            announcementList: []
        }
    }

    componentDidMount() {
        {
            getAccessToken
        }
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
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    style={{backgroundColor: '#C9CDE8'}}
                                >
                                    <Typography variant="h5" style={{textTransform: 'Capitalize'}}
                                                gutterBottom>{item.title}</Typography>
                                    <Typography style={{marginLeft: '15px', marginTop: '5px', fontSize: '12px'}}
                                                gutterBottom>( {dateFormat(item.created_at, "dddd, mmmm dS, yyyy, hh::mm:ss")} )</Typography>
                                    <IconButton
                                        style={{color: 'red', position: 'absolute', right: '5%', bottom: '15%'}}>
                                        <DeleteAnnouncement key={item.id} id={item.id} announcement={announcementList}>
                                        </DeleteAnnouncement>
                                    </IconButton>
                                    <IconButton
                                        style={{color: 'blue', position: 'absolute', right: '8%', bottom: '15%'}}>
                                        <GetAnnouncementById key={item.id} id={item.id} announcement={announcementList}>
                                        </GetAnnouncementById>
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
