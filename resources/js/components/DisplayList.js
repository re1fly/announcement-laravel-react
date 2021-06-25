import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {Card, CardActions, CardContent, Input, Menu, MenuItem} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Layout from "../containers/templates/Layout";
import {authOptions, getAllAnnouncement, getAllUser} from "../utils/Api";
import swal from "sweetalert";
import {UPDATE_DISPLAY, UPDATE_IS_ACTIVE} from "../utils/ApiUrl";
import Grid from "@material-ui/core/Grid";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import simpleModal from './ModalListAnnouncement'
import UserDisplay from "./UserDisplay";
import Modal from "@material-ui/core/Modal";

// import {useCombobox} from "downshift";

export function DisplayItems(props) {
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
                    text: " Select Announcement Success",
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
    const useStyles = makeStyles((theme) => ({
        statusOnline: {
            color: 'white',
            backgroundColor: '#279c00',
            float: 'right',
            width: '80px',
            textAlign: 'center'
        },
        statusOffline: {
            color: 'white',
            backgroundColor: '#dd0000',
            float: 'right',
            width: '80px',
            textAlign: 'center'
        },
        icon: {
            color: '#F9C900',
        },
        card: {
            width: '50%',
            marginBottom: '20px',
            marginLeft: '25%',
            textTransform: 'Capitalize',
            backgroundColor: 'black',
            color: 'white',
        },
        buttonSetDisplay: {
            color: '#F9C900',
        },
        itemSpacing: {
            marginTop: '4%'
        },
        paper: {
            position: 'absolute',
            width: 1000,
            height: 800,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            float: 'left',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        },
    }))

    const styles = useStyles();

    const [play, setPlay] = useState(props.is_active === 1);
    const [open, setOpen] = React.useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handlePlay = () => {
        const data = {
            'is_active': 1,
        };

        axios.post(UPDATE_IS_ACTIVE(props.id), data, authOptions).then(response => {
            if (response.status === 200) {
                setPlay(true)
                swal({
                    title: "Displayed!",
                    text: "Announcement Successfully Displayed",
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

    const handlePause = () => {
        const data = {
            'is_active': 0,
        };

        axios.post(UPDATE_IS_ACTIVE(props.id), data, authOptions).then(response => {
            if (response.status === 200) {
                setPlay(false)
                swal({
                    title: "Paused!",
                    text: "Announcement Successfully Paused",
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
        <Card className={styles.card} variant="outlined">
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
                        {(play === false) ? <IconButton onClick={handlePlay}>
                            <PlayArrowIcon className={styles.icon} fontSize="large"/>
                        </IconButton> : <IconButton onClick={handlePause}>
                            <PauseIcon className={styles.icon} fontSize="large"/>
                        </IconButton>}

                    </Grid>
                    <Grid item xs={12} className={styles.itemSpacing}>
                        {(play === true) ?
                            <CardActions>
                                <Button className={styles.buttonSetDisplay} size="small" aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}>Manual Announcement
                                </Button>
                                <Button className={styles.buttonSetDisplay} onClick={handleOpenModal}>
                                    Media Announcement
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleCloseModal}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    <div className={styles.paper}>
                                        <h2 id="simple-modal-title">Text in a modal</h2>
                                        <p id="simple-modal-description">
                                            Test Modal
                                        </p>
                                    </div>
                                </Modal>
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
                            </CardActions> : <div></div>
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>

                    {(play === true) ?
                        <Box className={styles.statusOnline} pt={1} pb={1} m={5} borderRadius="borderRadius">
                            Played
                        </Box> : <Box className={styles.statusOffline} pt={1} pb={1} m={5} borderRadius="borderRadius">
                            Stopped
                        </Box>}
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
        console.log(Echo)
        Echo.join('channel-announcement')
            // .here(function(DisplayItems){
            //     update_member_count(DisplayItems.count);
            //     console.log('laravelecho');
            //     console.log(update_member_count);
            // })
            .listen('UserOnline', (e) => {
                this.display = e.user
                console.log(this.display)
            })
            .listen('UserOffline', (e) => {
                this.display = e.user
                console.log(this.display)
            });

    }

    render() {
        const {display} = this.state
        const {announcement} = this.state
        return (
            <Layout>
                <div>
                    <Typography variant="h4" style={{textAlign: 'center'}}> Display List</Typography>
                    <Box mb={5}/>
                    {/*<Search />*/}
                    {display.map(item => (
                        <DisplayItems key={item.id} name={item.name} id={item.id}
                                      announcement={announcement} is_active={item.is_active}/>
                    ))}
                </div>
            </Layout>
        )
    }
}

export default DisplayList;
