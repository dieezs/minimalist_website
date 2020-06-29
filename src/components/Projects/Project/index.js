import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 550,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard({ title, description, github, fly, image }) {
    const classes = useStyles();

    const renderProjectOnFly = fly ? <Button size="small" color="primary" className="colorButton" target="_blank" href={fly}>Project on fly</Button> : null;

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className="titleProject">{title}</Typography>
                <p className="textProject">{description}</p>
            </CardContent>

            <CardActions>
                <Button variant="outlined" size="small" href={github} target="_blank" color="primary" className="colorButton">Github</Button>
                {renderProjectOnFly}
            </CardActions>
        </Card>
    );
}