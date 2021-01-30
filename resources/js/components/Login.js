import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {LoginImg} from "../assets";
import axios from 'axios';
import {Redirect} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${LoginImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successLogin, setSuccessLogin] = useState(false);
    const [roleAdmin, setRoleAdmin] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            'email': email,
            'password': password,
        };

        axios.post('http://localhost:8000/api/auth/login',data).then((response) => {
            console.log(response);
            console.log(response.status);
            if(response.status === 200){
                console.log('login success');
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('user_id', response.data.user_id)
                setSuccessLogin(true);
                setRoleAdmin(response.data.is_admin);
            }else{
                console.log('login failed');
            }

        }).catch(() => {
            console.log('login failed');
            }
        )

    }

    if(successLogin === true && roleAdmin === 1  ){
        return <Redirect to='/create-announcement' />
    }else if(successLogin === true && roleAdmin === 0 ){
        return <Redirect to='/display-announcement' />
    }



    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h3">
                        NOTICEBOARD
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit} noValidate>
                        <Typography component="h1" variant="h5" style={{marginTop: "90px"}}>
                            Welcome Back,
                        </Typography>
                        <Typography component="h1" style={{marginBottom: "10px"}}>
                            Please Sign In
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onInput={ e=>setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onInput={ e=>setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                           Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Register"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
