import React, {Component} from 'react';
import DashboardTemplate from "../containers/templates/Dashboard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Card, CardContent} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {getAllAnnouncement} from "../utils/Api";
import {getAccessToken} from "../utils/Token";
import ReactHtmlParser from "react-html-parser";

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
                    <div className="row">
                        {announcementList.map(item => (
                            <div className="col-lg" key={item.id}>
                                <Card variant="outlined"
                                      style={{width: '40%', marginBottom: '15px', marginLeft: '10%'}}>
                                    <Grid item>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography>
                                                {ReactHtmlParser(item.content)}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </DashboardTemplate>
        );
    }
}

export default AnnouncementList;
