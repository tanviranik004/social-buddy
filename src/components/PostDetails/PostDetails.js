import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import BottomNavigation from '@material-ui/core/BottomNavigation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
    root: {
      width: 320,
      margin: 8,
    },
  });
const PostDetails = (props) =>{
    const { id, title, body } = props.post;
    const classes = useStyles()
    return (
        <div>
            
   
    
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{body}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/comments/${id}`}><Button variant="contained" color="primary">Read Post</Button></Link>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            </CardActions>
        </Card>



        </div>
    );
};

export default PostDetails;