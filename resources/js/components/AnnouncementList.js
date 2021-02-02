import React, {Component} from 'react';
import DashboardTemplate from "../containers/templates/Dashboard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader} from "@material-ui/core";
import {getAllAnnouncement} from "../utils/Api";
import {getAccessToken} from "../utils/Token";
import ReactHtmlParser from "react-html-parser";
import dateFormat from 'dateformat';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function deleteAnnouncement(props) {
    const handleDelete = (announcementId) => {
        const data = {
            'announcement_id': announcementId
        }
        {
            getAccessToken
        }
        axios.delete(`http://localhost:8000/api/announcement/delete/${props.id}`, data, {
            headers: {
                'Authorization': `Bearer ${getAccessToken}`
            },
        }).then(response => {
            console.log(response);
        }).catch(() => {
            console.log('failed delete');
        });
    }
    return (
        <IconButton style={{color: 'red'}} id={props.id} onclick={() => {
            handleDelete(props.id);
        }}>
            <DeleteIcon fontSize="large"/>
        </IconButton>
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
                                    <deleteAnnouncement key={item.id} id={item.id} announcement={announcementList}/>
                                    <Typography variant="h5" style={{textTransform: 'Capitalize'}}
                                                gutterBottom>{item.title}</Typography>
                                    <Typography style={{marginLeft: '15px', marginTop: '5px', fontSize: '12px'}}
                                                gutterBottom>( {dateFormat(item.created_at, "dddd, mmmm dS, yyyy, hh::mm:ss")} )</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Card style={{width: '100%'}}>
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
