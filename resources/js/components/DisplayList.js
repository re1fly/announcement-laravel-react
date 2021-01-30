import axios from 'axios';
import React, {Component} from 'react';
import {Card, CardActions, CardContent, Menu, MenuItem} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import DashboardTemplate from "../containers/templates/Dashboard";

function DisplayItems(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectAnnouncement = (announcementId) => {
        setAnchorEl(null);
        const data = {
            'announcement_id': announcementId,
        };
        const token = localStorage.getItem('access_token');
        axios.post(`http://localhost:8000/api/display/edit/${props.id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            },

        }).then(response => {
            if (response.status === 200) {
                console.log('success update Announcement');
            } else {
                console.log('failed');
            }
        }).catch(() => {
            console.log('failed update');
        });
    };

    return (
        <Card variant="outlined" alignItems="center" style={{width: '80%', marginBottom: '15px', marginLeft: '10%'}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.name}
                </Typography>
            </CardContent>
            <Box component="div" display="inline" p={1} m={2}
                 style={{color: 'white', backgroundColor: '#22AF20', marginLeft: '80%'}}>
                Status
            </Box>

            <CardActions>
                <Button size="small" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Set
                    Display</Button>
                <Menu
                    id={props.id}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {props.announcement.map(item => (
                        <MenuItem key={item.id + props.id} onClick={() => {
                            handleSelectAnnouncement(item.id);

                        }}>{item.title}</MenuItem>
                    ))}

                </Menu>
            </CardActions>
        </Card>
    );
}

class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: [],
            announcement: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('access_token');
        axios.get('http://localhost:8000/api/auth/user-all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            this.setState({
                display: response.data.data
            })
        })

        axios.get('http://localhost:8000/api/announcement', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            this.setState({
                announcement: response.data.data
            })
        })

    }

    render() {
        return (
            <DashboardTemplate>
                <div>
                    <Typography variant="h4" style={{textAlign: 'center'}}> Display List</Typography>
                    <Box mb={5}/>
                    {this.state.display.map(item => (
                        <DisplayItems key={item.id} name={item.name} id={item.id}
                                      announcement={this.state.announcement}/>
                    ))}
                </div>
            </DashboardTemplate>
        )
    }
}

export default DisplayList;
