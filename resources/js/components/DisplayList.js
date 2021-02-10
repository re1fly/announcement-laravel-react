import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {Card, CardActions, CardContent, Input, Menu, MenuItem} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import DashboardTemplate from "../containers/templates/Dashboard";
import {authOptions, getAllAnnouncement, getAllUser} from "../utils/Api";
import swal from "sweetalert";
import {UPDATE_DISPLAY, UPDATE_IS_ACTIVE} from "../utils/ApiUrl";
import Grid from "@material-ui/core/Grid";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import {useCombobox} from "downshift";

function DisplayItems(props) {
    const [anchorEl, setAnchorEl] = useState(null);

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
        axios.post(UPDATE_DISPLAY(props.id), data, authOptions).then(response => {
            if (response.status === 200) {
                swal({
                    title: "Done!",
                    text: "Announcement was Displayed Successfully",
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
    const useStyles = makeStyles(() => ({
        status: {
            color: 'white',
            backgroundColor: '#279c00',
            float: 'right',
            width: '18%',
            textAlign: 'center'
        },
        icon: {
            color: '#F9C900',
        },
        card: {
            width: '80%',
            marginBottom: '20px',
            marginLeft: '10%',
            textTransform: 'Capitalize',
            backgroundColor: 'black',
            color: 'white',
        },
        buttonSetDisplay: {
            color: '#F9C900',
        },
        itemSpacing: {
            marginTop: '4%'
        }
    }))

    const styles = useStyles();


    const [play, setPlay] = useState(false)
    const handlePlay = () => {
        const data = {
            'is_active': 1,
        };

        axios.post(UPDATE_IS_ACTIVE(props.id), data, authOptions).then(response => {
            console.log(response)
            if (response.status === 200) {
                setPlay(true)
            }
        })
    }

    const handlePause = () => {
        const data = {
            'is_active': 0,
        };

        axios.post(UPDATE_IS_ACTIVE(props.id), data, authOptions).then(response => {
            console.log(response)
            if (response.status === 200) {
                setPlay(false)
            }
        })
    }

    return (
        <Card className={styles.card} variant="outlined" alignitems="center">
            {/*<Input style={{backgroundColor:'gray', color:'black'}} label="search display" onChange={this.onChange} />*/}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Grid item xs={12}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {props.name}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12}>
                        { (play === false) ? <IconButton onClick={handlePlay}>
                            <PlayArrowIcon className={styles.icon} fontSize="large"/>
                            </IconButton> : <IconButton onClick={handlePause}>
                            <PauseIcon className={styles.icon} fontSize="large"/>
                        </IconButton>  }
                    </Grid>
                    <Grid item xs={12} className={styles.itemSpacing}>
                        <CardActions>
                            <Button className={styles.buttonSetDisplay} size="small" aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}>Select Announcement</Button>
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
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={styles.status} pt={1} pb={1} m={5} borderRadius="borderRadius">
                        Status
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

/*/!*function Search() {

    const [displays, setDisplays] = useState([]);
    const [inputDisplays, setInputDisplays] = useState([]);
    const [singleDisplay, setSingleDisplay] = useState([]);

    useEffect(() => {
        getAllUser().then(response => {
            setDisplays(response.data.data)
        })
    }, [])

    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: inputDisplays,
        onInputValueChange: ({inputValue}) => {
            setInputDisplays(
                displays.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()))
            )
        }
    })*!/

    return (
        <div>
            <h3>Current Display: {singleDisplay}</h3>
            <div {...getComboboxProps()}>
                <Input {...getInputProps()}
                       placeholder="Search"
                       size="large"
                />
                <ul {...getMenuProps()}>
                    {isOpen && inputDisplays.map((item, index) => (
                        <span key={item.id} {...getItemProps({item, index})} onClick={() => setSingleDisplay(item.name)}>
                            <li style={highlightedIndex === index ? {background: 'grey'} : {}}>
                                <h4>{item.name}</h4>
                            </li>
                        </span>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}*/

class DisplayList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            display: [],
            announcement: []
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
            <DashboardTemplate>
                <div>
                    <Typography variant="h4" style={{textAlign: 'center'}}> Display List</Typography>
                    <Box mb={5}/>
                    {/*<Search />*/}
                    {display.map(item => (
                        <DisplayItems key={item.id} name={item.name} id={item.id}
                                      announcement={announcement}/>
                    ))}
                </div>
            </DashboardTemplate>
        )
    }
}

export default DisplayList;
