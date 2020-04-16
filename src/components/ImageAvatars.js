import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(10),
        },
    },
}));

 function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnEqD_CAkEPxaHjHu5t-ydhR3f_V1rqySl4nOIsIi_zcQ1Y2qv&usqp=CAU" />
            <Avatar alt="Travis Howard" src="https://bookingagentinfo.com/wp-content/uploads/2019/03/Ben-Schwartz-Contact-Information.jpeg" />
        </div>
    );
 }

export default ImageAvatars;