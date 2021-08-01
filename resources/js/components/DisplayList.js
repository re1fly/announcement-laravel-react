import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {
    Card,
    CardActions,
    CardContent, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle,
    FormControl, FormControlLabel,
    Input,
    InputLabel,
    Menu,
    MenuItem,
    Select, TextField
} from "@material-ui/core";
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
import UserDisplay from "./UserDisplay";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export function DisplayItems(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [delayButton, setDelayButton] = useState(false);
    const [announcementSaved, setAnnouncementSaved] = useState(announcementSaved);
    const [selectAnnounce, setSelectAnnounce] = useState(false);
    const [checkedAnnouncement, setCheckedAnnouncement] = useState([]);
    const [play, setPlay] = useState(props.is_active === 1);
    const [open, setOpen] = useState(false);
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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseDelay = () => {
        setDelayButton(null);
    };

    const handleOpenDelay = (event) => {
        setDelayButton(event.currentTarget);
    };

    const handleSelectDelay = (e, announcementSaved) => {
        setDelayButton(null);
        const delayVal = e.target.value;

        const data = {
            'announcement_id': announcementSaved,
            'delay_time': delayVal
        };

        axios.post(UPDATE_DISPLAY(props.id), data, authOptions).then(response => {
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

    const handleSelectAnnouncement = (announcementId) => {
        setAnchorEl(null);
        const data = {
            'announcement_id': announcementId,
        };

        axios.post(UPDATE_DISPLAY(props.id), data, authOptions).then(response => {
            if (response.status === 200) {
                console.log('ssuccess')
                swal({
                    title: "Done!",
                    text: "Select Announcement Success",
                    icon: "success",
                })
                setAnnouncementSaved(announcementId);
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
        if (!isChecked) {
            let indexAnnouncement = checkedAnnouncement.findIndex(e => e === event.target.value);
            if (indexAnnouncement >= -1) {
                checkedAnnouncement.splice(indexAnnouncement, 1)
            }
        } else {
            let indexAnnouncement = checkedAnnouncement.length;
            checkedAnnouncement.splice(indexAnnouncement, 0, event.target.value)
        }
        setCheckedAnnouncement(checkedAnnouncement);

        let intAnnounce = checkedAnnouncement.map(function (nnn) {
            return parseInt(nnn, 10)
        })
        console.log(intAnnounce)

        let multiAnnouncement = {
            'announcement_id': intAnnounce
        };

        axios.post(UPDATE_DISPLAY(props.id), multiAnnouncement, authOptions).then(response => {
            if (response.status === 200) {
                console.log('success set announcement')
                console.log(response)
            }

        }).catch((err) => {
            if (err.response) {
                console.log('set announcement error')
            }
        })

    };

    const handleSetAnnouncement = (checkedAnnouncement, multiAnnouncement) => {
        console.log('clicked')
        // setOpen(false);

    }

    return (
        <Card className={styles.card} variant="outlined">
            {/*<Input style={{backgroundColor:'gray', color:'black'}} label="search display" onChange={this.onChange} />*/}
            <Grid container spacing={3} style={{margin: 0}}>
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
                                <Button className={styles.buttonSetDisplay} size="small" aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}>Manual Announcement
                                </Button>
                                <Button className={styles.buttonSetDisplay} onClick={handleOpenModal}>
                                    Media Announcement
                                </Button>
                                <Button id="button-delay" className={styles.buttonSetDisplay} onClick={handleOpenDelay}>
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
                                                            // checked={selectAnnounce}
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
                                        <Button onClick={() => handleSetAnnouncement()} color="primary">
                                            Set Announcement
                                        </Button>
                                    </DialogActions>
                                </Dialog>
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
                                <Menu
                                    id={props.id}
                                    anchorEl={delayButton}
                                    open={Boolean(delayButton)}
                                    onClose={handleCloseDelay}
                                    keepMounted>
                                    <MenuItem key='1s' value={1000} onClick={handleSelectDelay}>1 sec</MenuItem>
                                    <MenuItem key='30s' value={30000} onClick={handleSelectDelay}>30 sec</MenuItem>
                                    <MenuItem key='1min' value={60000} onClick={handleSelectDelay}>1 min</MenuItem>
                                    <MenuItem key='3min' value={180000} onClick={handleSelectDelay}>3 min</MenuItem>
                                </Menu>
                            </CardActions> :
                            <div></div>
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
                <Typography variant="h4" style={{textAlign: 'center'}}> Display List</Typography>
                <Box mb={5}/>
                {/*<Search />*/}
                {display.map(item => (
                    <DisplayItems key={item.id} name={item.name} id={item.id}
                                  announcement={announcement} is_active={item.is_active}/>
                ))}
            </Layout>
        )
    }
}
