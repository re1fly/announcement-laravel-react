import axios from 'axios';
import React, { Component } from 'react';
import {Card, CardActions, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";


class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: []
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
            }, () => {
                console.log(this.state.display);
            })
        })
    }
    render() {
        return (
            <div>
                <Typography variant="h4" style={{textAlign: 'center'}}> Display List</Typography>
                <Box mb={5}/>
            {this.state.display.map(item => (
            <Card variant="outlined" alignItems="center" style={{width: '80%', marginBottom: '15px', marginLeft:'10%'}}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {item.name}
                    </Typography>
                </CardContent>
                <Box component="div" display="inline" p={1} m={2} style={{color: 'white', backgroundColor:'#22AF20', marginLeft: '80%'}}>
                    Status
                </Box>

                <CardActions>
                    <Button size="small">Set Display</Button>
                </CardActions>
            </Card>


        ))}
            </div>
        )
    }
}
export default DisplayList;
