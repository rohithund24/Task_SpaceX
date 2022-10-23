import * as React from 'react';
import { Box, Card, CardContent, Typography, } from '@material-ui/core';
import { makeStyles } from "@material-ui/core"

// import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    textColor: {
        color: '#7600bc',
        fontWeight: 800
    },
    image: {
        height: 220,
        width: 130,
        [theme.breakpoints.down('sm')]: {
            height: 280,
            width: '80%'
        },
        [theme.breakpoints.down('xs')]: {
            height: 320,
            width: '80%'
        },
    },
    card: {
        minHeight: '100%',
        background: '#fff',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: 10,
        //     marginRight: 10,
        //     marginBottom: 10
        // },

    },
    imageConatiner: {
        textAlign: 'center',
        backgroundColor: '#eee',
        minHeight: 220,
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {

        },
    }
}));

export default function MediaCard(props) {
    const { image, alt, title, body, ...othersProps } = props
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>
                <Box className={classes.imageConatiner}>
                    <img src={image} alt={image} className={classes.image} />
                </Box>
                <Typography className={classes.textColor} gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                {body}
            </CardContent>
        </Card>
    );
}
