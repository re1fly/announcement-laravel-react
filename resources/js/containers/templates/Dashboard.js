import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import AirplayIcon from '@material-ui/icons/Airplay';
import SpeakerNotesSharpIcon from '@material-ui/icons/SpeakerNotesSharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import {NavLink} from "react-router-dom";
import {authOptions, getUserLogin} from "../../utils/Api";
import {GET_ID_ANNOUNCEMENT, GET_USER_LOGIN} from "../../utils/ApiUrl";
import axios from "axios";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


export default function DashboardTemplate(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState('');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        axios.get(GET_USER_LOGIN, authOptions).then(response => {
            setUser(response.data.name)
        })

    }, [])


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" style={{color: "#F9C900"}} noWrap>
                        <OndemandVideoSharpIcon fontSize="large"/> NoticeBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button key='displayList' component={NavLink} to="/display-list">
                        <ListItemIcon> <AirplayIcon/></ListItemIcon>
                        <ListItemText primary='Display List'/>
                    </ListItem>
                    <ListItem button key='announcement' component={NavLink} to="/create-announcement">
                        <ListItemIcon> <SpeakerNotesSharpIcon/></ListItemIcon>
                        <ListItemText primary='Announcement'/>
                    </ListItem>
                    <ListItem button key='AnnouncementList' component={NavLink} to="/announcement-list">
                        <ListItemIcon> <LibraryBooksIcon/></ListItemIcon>
                        <ListItemText primary='Announcement List'/>
                    </ListItem>
                    {/*<ListItem button key='Media'>*/}
                    {/*    <ListItemIcon> <PermMediaIcon /></ListItemIcon>*/}
                    {/*    <ListItemText primary='Media' />*/}
                    {/*</ListItem>*/}
                </List>
                <Divider/>
                <List>
                    <ListItem button key='Setting'>
                        <ListItemIcon><SettingsSharpIcon/></ListItemIcon>
                        <ListItemText primary='Setting'/>
                    </ListItem>
                    <ListItem button key='Admin'>
                        <ListItemIcon><PersonIcon/></ListItemIcon>
                        <ListItemText primary={user}/>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {props.children}
            </main>
        </div>
    );
}
