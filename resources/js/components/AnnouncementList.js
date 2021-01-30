import react, {Component} from 'react';
import DashboardTemplate from "../containers/templates/Dashboard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React from "react";
import {Card, CardContent} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {getAnnouncementByUserId} from "../utils/api";

class AnnouncementList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            announcementList: []
        }
    }

    componentDidMount() {

        getAnnouncementByUserId()
            .then(response => {
                console.log(response);
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
                    <div class="row">
                        {announcementList.map(item => (
                            <div className="col-lg">
                                <Card variant="outlined"
                                      style={{width: '40%', marginBottom: '15px', marginLeft: '10%'}}>
                                    <Grid item>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography>
                                                {item.content}
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
