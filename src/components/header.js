import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Toolbar, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    width: 'auto',
    maxWidth: '500',
    margin: 'auto',
  display: 'flex',
    },
    appbar: {
        //boxShadow: '0px 10px 13px -7px #000000, -7px 38px 10px 19px rgba(255,255,255,0.74)',
        backgroundColor: 'black',
        opacity: "80%",
        flexDirection: 'row-reverse',
        alignContent: 'center',
        margin: 'auto',
    }, 
    typography: {
        color: 'white',
        variant: 'h3',
        fontFamily: 'Nunito',

    }
}));

export default function Header(props) {
    
    const classes  = useStyles();

        return (
        <AppBar position="static" className={classes.appbar}>
        <Toolbar>
            <Grid item xs={12}>
                    <Button className={classes.button} href="./home">
                        <Typography className={classes.typography}>
                        Home
                        </Typography>
                    </Button>
                    <Button className={classes.button} href="./aboutme">
                    <Typography className={classes.typography}>
                        About Me
                    </Typography>
                    </Button>
                    <Button className={classes.button} href="./projects">
                    <Typography className={classes.typography}>
                        Projects
                    </Typography>
                    </Button>
                    <Button className={classes.button} href="./resume">
                    <Typography className={classes.typography}>
                        Resume
                    </Typography>
                    </Button>
                    <Button className={classes.button} href="https://github.com/hamptoam" >
                    <Typography className={classes.typography}>
                        LinkedIn
                    </Typography>
                    </Button>
                    </Grid>
            </Toolbar>
            </AppBar>
    );    
}

Header.propTypes = {
    children: PropTypes.element.isRequired
};