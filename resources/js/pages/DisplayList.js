import React, {Component} from 'react';
import Layout from "../containers/templates/Layout";
import {getAllAnnouncement, getAllUser} from "../utils/Api";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {DisplayItems} from "../components/DisplayItems";


export default class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: [],
            announcement: [],
        }
    }

    componentDidMount() {
        getAllUser().then(response => {
            this.setState({
                display: response.data.data
            })
        })
        getAllAnnouncement().then(response => {
            this.setState({
                announcement: response.data.data
            })
        })
    }

    render() {
        const {display} = this.state
        const {announcement} = this.state
        return (
            <Layout>
                <Typography variant="h4"
                            style={{textAlign: 'center'}}>
                    Display List
                </Typography>
                <Box mb={5}/>
                {display.map(item => (
                    <DisplayItems key={item.id}
                                  name={item.name}
                                  id={item.id}
                                  announcement={announcement}
                                  is_active={item.is_active}/>
                ))}

            </Layout>
        )
    }
}
