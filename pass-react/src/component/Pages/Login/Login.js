import React from 'react';

import useAuth from "../../../hooks/use-auth";

import {Button, CssBaseline} from "@material-ui/core";
import {Container, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';

const _root = {
    mt: 8
};
const _picture = {
    backgroundImage: "url(https://picsum.photos/672/430)",
    backgroundRepeat: "no-repeat",
    backgroundColor: (t) =>
        t.palette.mode === "light"
            ? t.palette.grey[50]
            : t.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
};
const _login = {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};
const _form = {
    mt: 1
};
const _button = {
    mt: 3,
    mb: 2
};


const Login = () => {
    const {onLogin} = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let credentials = {
            username: data.get("user"),
            password: data.get("password"),
        };
        onLogin(credentials);
    };


    return (
        <Container component="main" maxWidth="lg">
            <Box sx={_root}>
                <Grid container>
                    <CssBaseline />
                    <Grid
                        sx={_picture}
                        item
                        xs={false}
                        sm={4}
                        md={7}
                    />
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <Box sx={_login}>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box
                                sx={_form}
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="user"
                                    autoComplete="user"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    sx={_button}
                                    startIcon={<LoginTwoToneIcon/>}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    login
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;