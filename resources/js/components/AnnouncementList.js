import React, {Component, useState} from 'react';
import DashboardTemplate from "../containers/templates/Dashboard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
} from "@material-ui/core";
import {authOptions, getAllAnnouncement} from "../utils/Api";
import ReactHtmlParser from "react-html-parser";
import dateFormat from 'dateformat';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import swal from "sweetalert";
import {DELETE_ANNOUNCEMENT} from "../utils/ApiUrl";
import {NavLink} from "react-router-dom";
import Swal from "sweetalert2";


function DeleteAnnouncement(props) {

    const handleDelete = () => {
        const {announcement} = props

        Swal.fire({
            title: 'Do you want to delete the announcement ?',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: `Yes`,
            denyButtonColor: '#d33',
            denyButtonText: `Cancel`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete(DELETE_ANNOUNCEMENT(announcement.id), authOptions)
                    .then(response => {
                        if (response.status === 200) {
                            swal({
                                title: "Done!",
                                text: "Delete Announcement Successfully",
                                icon: "success",
                            })

                            props.deleteAnnouncement()

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
            } else if (result.isDenied) {
                Swal.fire('Cancelled', 'Delete announcement was cancelled', 'info')
            }
        })


    }
    return (
        <DeleteIcon fontSize="inherit" onClick={() => {
            handleDelete(props.id)
        }}/>
    )
}


class AnnouncementList extends Component {
    _handleDeleteAnnouncementList = (key) => {
        this.setState((prevState,props)=>{
            let newAnnouncementList = prevState.announcementList
            newAnnouncementList.splice(key,1)
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
            <DashboardTemplate>
                <div>
                    <Typography variant="h4" style={{textAlign: 'center'}}> Announcement List</Typography>
                    <Box mb={5}/>
                    {announcementList.map((announcement,key) => (
                        <Card
                            style={{marginBottom: '15px'}}
                            key={announcement.id}
                        >
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    style={{backgroundColor: 'black', color: 'white'}}
                                >
                                    <Typography variant="h5" style={{textTransform: 'Capitalize'}}
                                                gutterBottom>{announcement.title}</Typography>
                                    <Typography style={{
                                        marginLeft: '15px',
                                        marginTop: '5px',
                                        fontSize: '12px',
                                        color: '#F9C900'
                                    }}
                                                gutterBottom>( Created
                                        at {dateFormat(announcement.created_at, "dddd, mmmm dS, yyyy")} )</Typography>
                                    <IconButton
                                        style={{color: 'red', position: 'absolute', right: '2%', bottom: '15%'}}>
                                        <DeleteAnnouncement key={key}
                                                            deleteAnnouncement={()=>this._handleDeleteAnnouncementList(key)}
                                                            announcement={announcement}/>
                                    </IconButton>
                                    <IconButton
                                        component={NavLink} to={"/edit-announcement/" + announcement.id}
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
                </div>
            </DashboardTemplate>
        );
    }
}

export default AnnouncementList;
