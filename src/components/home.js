import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Collapse, Container, Grid, Card, CardActionArea, CardMedia} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radium, {StyleRoot} from 'radium';
import PropTypes from 'prop-types';

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
        //backgroundImage: ("../images/temppicture.jpg"),
        height: '250px',
        //boxShadow: '0px 10px 13px -7px #000000, -7px 38px 10px 19px rgba(255,255,255,0.74)',
    },
    bubble: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        display: 'flex',
        margin: 'auto',
    },
    icon: {
        fontSize: '2rem',
        color: 'black',
    },
    button: {
        color: 'black',
        fontFamily: 'Nunito',
    },
    colorText: {
        color:'black',
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
        color:'black',
        fontSize: '2rem',
    },
    floating: {
        animation: '$floating 3000ms ${theme.transitions.easing.easeInOut}',
        animationName: 'floating',
        animationDuration: '3s',
        animationIterationCount: 'infinite',
        animationTimingFuntion: 'ease-in-out',
    },
    "@keyframes floating": { 
        "0%" : { opacity: 0, transform: "translateY(-200%)" }, 
        "50%": { opacity: 1, transform: "translateY(0)" }, 
        "100%":   { opacity: 2, transform: "translateY(0)" },     
    } 
});

export default function Home(props) {

    const classes  = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
            
        },[])

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
  
  
         
        

<Collapse in={checked} {...(checked ? {timeout: 1000 } : {})} collapsedHeight={50}>
<div className={classes.container}>
    <h1 className={classes.title}>
        Kenneth Bontempo<br />
        <br/>
         <span className={classes.colorText}> Electrical Engineer</span>
    </h1>
    <IconButton>
     <h3 className={classes.button}>
        Follow Me 

         </h3> 
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