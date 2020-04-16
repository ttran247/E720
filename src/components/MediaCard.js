import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      
    },

});

function ImgMediaCard() {
    const classes = useStyles();

    return (
        <>
            <h1 className="service">Our Services</h1>
            {/* Market & Strategize */}
            <div id="cardContainer">
            <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        title="Contemplative Reptile"
                        direction="row"

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Marget & Strategize
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A great experience starts with strategy and sets the stage for actionable results. Digital Strategy can help you get off the ground.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>


            {/* Design & Build Card */}

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        title="Contemplative Reptile"
                        direction="row"

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Design & Build          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            We work with you to create functional, beautiful experiences that grow
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
            
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>


            {/* Promote & Engage */}
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://images.pexels.com/photos/34639/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        title="Contemplative Reptile"
                        direction="row"

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Promote & Engange
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            We develop and execute strategies to acquire and engage customers.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
                </Card>
                </div>
        </>
    );
}
export default ImgMediaCard