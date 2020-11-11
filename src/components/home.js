import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse, Container, Grid, Card, CardActionArea } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StyleRoot } from 'radium';
import PropTypes from 'prop-types';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles({
    root: {
        spacing: 0,
        display: 'flex',
        justifyContent: 'flex',
        height: '100vh',
        fontFamily: 'Nunito',
        flexGrow: 1,
        alignItems: 'center',
        margin: 'auto',
    },
    grid: {
        padding: '50px',
        width: '100%',
    },
    media: {
        borderRadius: '50%',
        height: '250px',
    },
    bubble: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        display: 'flex',
        margin: 'auto',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    button: {
        color: 'black',
        fontFamily: 'Nunito',
    },
    colorText: {
        color: 'black',
    },
    container: {
        textAlign: 'center',
        borderRadius: '25px',
        height: '250px',
        //boxShadow: '0px 10px 13px -7px #000000, -7px 38px 10px 19px rgba(255,255,255,0.74)',
        backgroundColor: "white",
    },
    title: {
        color: 'black',
        fontSize: '3rem',
        padding: '10px',

    },
    goDown: {
        color: 'black',
        fontSize: '2rem',
    },
});

export default function Home() {

    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <Grid className={classes.root}>
            <Container className={classes.grid}
            >
                <StyleRoot>
                    <Grid style={classes.bounce}>
                        <Card className={classes.bubble} margin={'auto'}>
                            <CardActionArea>
                            </CardActionArea>
                        </Card>

                        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                            <div className={classes.container}>
                                <h1 className={classes.title}>
                                    Kenneth Bontempo<br />
                                    <br />
                                    <span className={classes.colorText}> Electrical Engineer</span>
                                </h1>
                              
                                    <IconButton>
                                        <h3 className={classes.button}>
                                            Follow Me </h3>
                                        <ExpandMoreIcon className={classes.goDown} />
                                    </IconButton>
                            </div>
                        </Collapse>
                    </Grid>
                </StyleRoot>

            </Container>
        </Grid>

    )
};

Home.propTypes = {
    children: PropTypes.element.isRequired
};