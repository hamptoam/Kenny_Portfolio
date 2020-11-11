import React from "react";
//import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline } from '@material-ui/core';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import mkebackground from './components/tombarrettmkebackground.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundImage: `url(${mkebackground})`,
        backgroundRepeat: 'no-repeat',
    },
}));

export default function App() {
    {
        const classes = useStyles();
        return (
            <React.Fragment>
                <CssBaseline />
                <Grid className={classes.root}>
                    <Header />
                    <Main />
                    <Footer />
                </Grid>
            </React.Fragment>
        );
    }
}

