import React, {Component} from 'react';
import DashboardTemplate from "../containers/templates/Dashboard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {getAllAnnouncement} from "../utils/Api";
import {getAccessToken} from "../utils/Token";
import ReactHtmlParser from "react-html-parser";
import dateFormat from 'dateformat';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function DeleteItems(props){
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (announcementId) => {
        const data = {
            'announcement_id': announcementId,
        };
        {
            getAccessToken
        }
        axios.delete(`http://localhost:8000/api/announcement/delete/${props.id}`,data, {
            headers: {
                'Authorization': `Bearer ${getAccessToken}`
            },
        }).then(response => {
            console.log(response);
            if (response.status === 200) {
                console.log('success delete Announcement');
            } else {
                console.log('failed');
            }
        }).catch(() => {
            console.log('failed delete');
        });
    }
    return (
        <IconButton style={{marginTop: '2.5%' ,marginLeft: '85%', color: 'red'}} onClick={handleClick}>
            <DeleteIcon fontSize="large" />
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
                        <Card variant="outlined"
                              style={{marginBottom: '15px'}}
                              key={item.id}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <CardHeader
                                        title={item.title}
                                        subheader={dateFormat(item.created_at, "dddd, mmmm dS, yyyy, hh::mm:ss")}
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <DeleteItems />
                                </Grid>

                            </Grid>
                            <Divider />
                            <CardContent>
                                {ReactHtmlParser(item.content)}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </DashboardTemplate>
        );
    }
}

export default AnnouncementList;
