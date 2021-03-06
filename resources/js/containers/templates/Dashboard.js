import React, {useEffect, useRef, useState} from 'react';
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
import {NavLink, Link, useHistory} from "react-router-dom";
import {authOptions, getUserLogin, logout} from "../../utils/Api";
import {GET_ID_ANNOUNCEMENT, GET_USER_LOGIN} from "../../utils/ApiUrl";
import axios from "axios";
import {ClickAwayListener, Grow, InputBase, MenuItem, MenuList, Paper, Popper} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Login from "../../components/Login";

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
        backgroundColor: 'black',
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
        color : 'white'
    },
    drawerOpen: {
        width: drawerWidth,
        backgroundColor: 'black',
        color: 'white',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: 'black',
        color: 'white',
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
    listColor: {
        color: 'white'
    },
    textCapitalize: {
        textTransform: 'capitalize'
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'absolute',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#898990',
        marginLeft: '65%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    divider: {
        backgroundColor: '#F9C900'
    }
}));


export default function DashboardTemplate(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState('');
    const [openLogout, setOpenLogout] = useState(false);
    const anchorRef = useRef(null);
    const [successLogout, setSuccessLogout]= useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpenLogout((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpenLogout(false);

    }

    const history = useHistory();

    const handleLogout = (event) => {
        event.preventDefault();
        logout().then(response => {
            console.log(response)
            if(response.status === 200){
                history.push("/");
            }
        })
    }



    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenLogout(false);
        }
    }

    const prevOpen = React.useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && openLogout === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = openLogout;
    }, [openLogout]);

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
                    <Typography variant="h6" style={{color: "#F9C900"}} noWrap >
                        <OndemandVideoSharpIcon fontSize="large"/> NoticeBoard
                    </Typography>
                    {/*<div className={classes.search}>*/}
                    {/*    <div className={classes.searchIcon}>*/}
                    {/*        <SearchIcon />*/}
                    {/*    </div>*/}
                    {/*    <InputBase*/}
                    {/*        placeholder="Search…"*/}
                    {/*        classes={{*/}
                    {/*            root: classes.inputRoot,*/}
                    {/*            input: classes.inputInput,*/}
                    {/*        }}*/}
                    {/*        inputProps={{ 'aria-label': 'search' }}*/}
                    {/*    />*/}
                    {/*</div>*/}
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
                    <IconButton onClick={handleDrawerClose} className={classes.listColor}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button key='displayList' component={NavLink} to="/display-list">
                        <ListItemIcon className={classes.listColor}> <AirplayIcon/></ListItemIcon>
                        <ListItemText primary='Display List'/>
                    </ListItem>
                    <ListItem button key='announcement' component={NavLink} to="/create-announcement">
                        <ListItemIcon className={classes.listColor}> <SpeakerNotesSharpIcon/></ListItemIcon>
                        <ListItemText primary='Announcement'/>
                    </ListItem>
                    <ListItem button key='AnnouncementList' component={NavLink} to="/announcement-list">
                        <ListItemIcon className={classes.listColor}> <LibraryBooksIcon/></ListItemIcon>
                        <ListItemText primary='Announcement List'/>
                    </ListItem>
                    {/*<ListItem button key='Media'>*/}
                    {/*    <ListItemIcon> <PermMediaIcon /></ListItemIcon>*/}
                    {/*    <ListItemText primary='Media' />*/}
                    {/*</ListItem>*/}
                </List>
                <Divider className={classes.divider} />
                <List>
                    <ListItem button key='Admin'
                              ref={anchorRef}
                              aria-controls={open ? 'menu-list-grow' : undefined}
                              aria-haspopup="true"
                              onClick={handleToggle}>
                        <ListItemIcon className={classes.listColor}><PersonIcon/></ListItemIcon>
                        <ListItemText className={classes.textCapitalize} primary={user}/>
                    </ListItem>
                    <Popper open={openLogout} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={openLogout} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem style={{width: '120px', height: '25px'}}>Setting</MenuItem>
                                            <MenuItem
                                                href="/"
                                                onClose={handleClose}
                                                onClick={handleLogout}
                                                style={{width: '120px', height: '25px'}}>
                                                Logout
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {props.children}
            </main>
        </div>
    );
}
