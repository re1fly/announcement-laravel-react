import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import swal from "sweetalert";

import Layout from "../containers/templates/Layout";
import {authOptions, getAllAnnouncement, getAllUser} from "../utils/Api";
import {
    ADD_DISPLAY_ANNOUNCEMENT,
    GET_ANNOUNCEMENT_BY_USER,
    UPDATE_DELAY,
    UPDATE_IS_ACTIVE
} from "../utils/ApiUrl";

import {
    Card,
    CardActions,
    CardContent,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Menu,
    MenuItem
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";


export function DisplayItems(props) {
    const [delayButton, setDelayButton] = useState(false);
    const [announcementSaved, setAnnouncementSaved] = useState(announcementSaved);
    const [play, setPlay] = useState(props.is_active === 1);
    const [open, setOpen] = useState(false)
    const [announcementUser, setAnnouncementUser] = useState([]);
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
            borderRadius: '18px'
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
        formControl: {
            display: 'flex',
            // minWidth: 120,
        },
    }))
    const styles = useStyles();

    useEffect(() => {
        axios.get(GET_ANNOUNCEMENT_BY_USER(props.id), authOptions).then(response => {
            setAnnouncementUser(response.data.data)
        })
    }, [])

    const handleCloseDelay = () => {
        setDelayButton(null);
    };

    const handleOpenDelay = (event) => {
        setDelayButton(event.currentTarget);
    };

    const handleSelectDelay = (e) => {
        setDelayButton(null);
        const delayValue = e.target.value;

        const data = {
            'delay_time': delayValue
        };

        axios.post(UPDATE_DELAY(props.id), data, authOptions).then(response => {
            if (response.status === 200) {
                swal({
                    title: "Done!",
                    text: "Set Delay Time Success",
                    icon: "success"
                });

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

    const handleChangeSelect = (event, isChecked) => {
        const announceId = parseInt(event.target.value);
        if (!isChecked) {
            setAnnouncementUser(announcementUser.filter(item => item.announcement_id !== announceId))
        } else {
            const data = {
                user_id: props.id,
                announcement_id: announceId,
            };
            setAnnouncementUser([...announcementUser, data]);
        }
    }

    const handleSetAnnouncement = () => {
        const announcementIds = announcementUser.map((item) => {
            return item.announcement_id
        });
        const announcementId = {announcement_ids: announcementIds}

        axios.post(ADD_DISPLAY_ANNOUNCEMENT(props.id), announcementId, authOptions).then(response => {
            if (response.status === 200) {
                swal({
                    title: "Done!",
                    text: "Select Announcement Success",
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
        );
    }

    return (
        <Card className={styles.card}
              variant="outlined">

            <Grid container spacing={3}
                  style={{margin: 0}}>

                <Grid item xs={12} sm={9}>

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
                                <Button className={styles.buttonSetDisplay}
                                        onClick={handleOpenModal}>
                                    Select Announcement
                                </Button>
                                <Button id="button-delay"
                                        className={styles.buttonSetDisplay}
                                        onClick={handleOpenDelay}>
                                    Delay Announcement
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleCloseModal}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    <DialogTitle>Choose Announcement</DialogTitle>

                                    <DialogContent>
                                        <FormControl className={styles.formControl}>
                                            {props.announcement.map((item, n) => (
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={announcementUser.some(
                                                                itemUser => itemUser.announcement_id === item.id)}
                                                            key={item.id}
                                                            onChange={handleChangeSelect}
                                                            name={`announcement[${item.id}]`}
                                                            color="primary"
                                                            value={item.id}
                                                        />
                                                    }
                                                    label={item.title}
                                                />
                                            ))}
                                        </FormControl>
                                    </DialogContent>

                                    <DialogActions>
                                        <Button key={props.id}
                                                onClick={() => handleSetAnnouncement()}
                                                color="primary">
                                            Set Announcement
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                                <Menu
                                    id={props.id}
                                    anchorEl={delayButton}
                                    open={Boolean(delayButton)}
                                    onClose={handleCloseDelay}
                                    keepMounted>
                                    <MenuItem key='1s'
                                              value={1000}
                                              onClick={handleSelectDelay}>
                                        1 sec
                                    </MenuItem>
                                    <MenuItem key='30s'
                                              value={30000}
                                              onClick={handleSelectDelay}>
                                        30 sec
                                    </MenuItem>
                                    <MenuItem key='1min'
                                              value={60000}
                                              onClick={handleSelectDelay}>
                                        1 min<
                                        /MenuItem>
                                    <MenuItem key='3min'
                                              value={180000}
                                              onClick={handleSelectDelay}>
                                        3 min
                                    </MenuItem>
                                </Menu>
                            </CardActions> :
                            null
                        }
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={3}>
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
