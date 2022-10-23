import * as React from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import Card from "../components/Card"
import { useSelector } from "react-redux"
import { isEmpty, map } from 'lodash';

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
    innerText: {
        color: '#7600bc'
    }
}));

export default function BasicGrid() {
    const spaces = useSelector((state) => state.spacesReducer.spaces)
    const classes = useStyles()
    console.log("spaces", spaces)
    return (
            <Grid container spacing={2}>
                {spaces.length ?
                    map(spaces, (data, idx) => <Grid item key={idx} xs={12} sm={6} lg={3}>
                        <Card image={data.links.mission_patch_small}
                            title={`${data.mission_name} #${data.flight_number}`}
                            body={<Grid container>
                                <Grid item xs={12}>
                                    <Typography><b>{"Mission Ids: "}</b></Typography>
                                    <ul>
                                        {
                                            isEmpty(data.mission_id) ? <li>{"List Mission Ids"}</li> : map(data.mission_id, (d, i) => <li key={i} className={classes.innerText}>
                                                <span className={'innerText'}> {d}</span>
                                            </li>)
                                        }
                                    </ul>
                                    <Typography ><b>{"Launch Year: "}</b> <span className={classes.innerText}> {data.launch_year}</span></Typography>
                                    <Typography><b>{"Successfull Lauch: "}</b> <span className={classes.innerText}> {data.launch_success ? 'True' : 'False'}</span></Typography>
                                    <Typography><b>{"Successfull Landing: "}</b> <span className={classes.innerText}> {'{launh_landing}'}</span></Typography>
                                </Grid>
                            </Grid>} />

                    </Grid>) : <Grid item xs={12}><Typography style={{ textAlign: 'center' }}>{'No data found'}</Typography></Grid>
                }
            </Grid>
    );
}
