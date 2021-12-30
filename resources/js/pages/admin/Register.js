import React, {useState} from 'react';
import axios from "axios";
import swal from 'sweetalert';

import {REGISTER} from "../../utils/ApiUrl";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../../components/misc/Copyright";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'black',
        color: '#F9C900'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'black',
        color: '#F9C900'
    },
    colorTheme: {
        backgroundColor: 'black',
        color: '#F9C900'
    }
}));

export default function Register() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const isAdmin = 0;

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            'name': name,
            'email': email,
            'password': password,
            'password_confirmation': passwordConfirmation,
            'is_admin': isAdmin
        };
        axios.post(REGISTER, data).then((response) => {
            if (response.status === 201) {
                swal({
                    title: "Done!",
                    text: "Success registered",
                    icon: "success",
                })
                setName('');
                setEmail('');
                setPassword('');
                setPasswordConfirmation('');
            }
        }).catch((error) => {
                if (error.response) {
                    swal({
                        title: "Error!",
                        text: "Please check your form !",
                        icon: "error",
                        dangerMode: true,
                    })
                }
            }
        )
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                value={name}
                                onInput={e => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onInput={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onInput={e => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="passwordConfirmation"
                                label="Password Confirmation"
                                type="password"
                                id="passwordConfirmation"
                                autoComplete="current-password"
                                value={passwordConfirmation}
                                onInput={e => setPasswordConfirmation(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="isAdmin"
                                type="password"
                                id="isAdmin"
                                value={isAdmin}
                                type="hidden"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}
