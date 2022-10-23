import * as React from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import Filter from "./Filter"
import Body from "./Body"
import { useSelector } from "react-redux"
import { clearAllListeners } from '@reduxjs/toolkit';

const useStyles = makeStyles((theme) => ({
  filter: {
    padding: 16,
    width: 300,
    [theme.breakpoints.down('sm')]: {
      width: '210px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
  },
  root: {
    backgroundColor: '#eee'
  },
  body: {
    padding: 16,
  },
  header: {
    paddingLeft: 20
  },
  footer: {
    textAlign: 'center'
  }
}));

export default function BasicGrid() {
  const spaces = useSelector((state) => state.spacesReducer.spaces)
  const classes = useStyles()
  console.log("spaces", spaces)
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Box className={classes.header}>
          <Typography variant='h4'><b>{'SpaceX Launch Programs'}</b></Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box style={{ padding: 20 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={3}>
              <Filter />
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Body />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {/* <Box className={classes.footer}> */}
        <Typography className={classes.footer} variant='h6'><b>{'Developed By:'}</b> Rohit Hundre</Typography>
        {/* </Box> */}
      </Grid>
    </Grid >
  );
}
