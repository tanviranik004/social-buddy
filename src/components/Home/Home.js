import React from 'react';
import Users from '../Users/Users';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
   
   logout:{alignItems:" center"} 
});

const Home = () => {
const classes = useStyles();

    return (
        <div>
                <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <PeopleIcon></PeopleIcon>
             
            </IconButton>
            <Typography variant="h6" color="inherit"> Social Buddy-village-community </Typography>
            
            <Button  className={classes.logout} color="inherit">LogOut</Button>
            
            </Toolbar>
            
        </AppBar>
            <Users></Users>
        </div>
    );
};

export default Home;