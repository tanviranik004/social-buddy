import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
      width: 650,
      margin: 12,     
      display: 'inline-block'
    },
});

const CommentsDetails = (props) => {
    const { email, name, body } = props.comment;
    const [image, setImage] = useState([]);
    useEffect( () => {
            const url=`https://randomuser.me/api/?results=2`
            fetch(url)
            .then(res => res.json())
            .then(data => setImage(data.results[0].picture))
    }, [])
   
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <div style={{display: 'flex'}}>
                        <Avatar style={{marginRight: '20px'}} alt="Remy Sharp" src={image.medium} />
                        <Typography gutterBottom variant="h4" component="h2">{email}</Typography>
                    </div>
                    <Typography gutterBottom variant="h6" component="h6">{name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{body}</Typography>
                </CardContent>
            </CardActionArea>
         </Card>
    );
};

export default CommentsDetails;