import * as React from 'react';
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import Button from "../components/Button"
import { useDispatch, useSelector } from 'react-redux';
import { getLaunches } from "../services"
import { map } from 'lodash'

const useStyles = makeStyles((theme) => ({
	filter: {
		padding: 16,
		// width: 300,
		backgroundColor: '#fff',
		[theme.breakpoints.down('sm')]: {
			// width: '210px'
		},
		[theme.breakpoints.down('xs')]: {
			width: '90%'
		},
	},
}));


const Years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
export default function BasicGrid() {
	const classes = useStyles()
	const filters = useSelector((state) => state.spacesReducer)
	const { spaces, currentYear, sLanding, sLaunch } = filters
	const dispatch = useDispatch()
	const Header = ({ title }) => {
		return <Typography style={{ textAlign: 'center', margin: 16, borderBottom: '2px solid #ABB0B8' }}> {title}</Typography >
	}

	React.useEffect(() => {
		(async () => {
			let res = await getLaunches({ year: currentYear, landing: sLanding, launch: sLaunch })
			dispatch({ type: "SET_SPACES", payload: res })
		})()
	}, [currentYear, sLanding, sLaunch])

	console.log("spaces", spaces)
	console.log("filters", filters)

	const handleSpaceFilter = async (data, type) => {
		let res = []
		if (type === 'year') {
			dispatch({ type: "SET_CURRENTYEAR", payload: data })
		} else if (type === 'launch') {
			dispatch({ type: "SET_LAUNCH", payload: data })
			res = await getLaunches({ year: data })

		} else if (type === 'landing') {
			res = await getLaunches({ year: data })
			dispatch({ type: "SET_LANDING", payload: data })
		}
		dispatch({ type: "SET_SPACES", payload: res })

	}

	return (
		<Box className={classes.filter}>
			<Grid container>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={12}><Header title={'Launch Year'} /></Grid>
						<Grid item xs={12}>
							<Grid container spacing={2}>
								{
									map(Years, (data, idx) => <Grid  style={{ textAlign: 'center' }} key={idx} onClick={() => handleSpaceFilter(data, 'year')} item xs={6}><Button status={currentYear === data ? 'active' : 'InActive'} title={data} /></Grid>)
								}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={12}><Header title={'Launch Year'} /></Grid>
						<Grid item xs={12}>
							<Grid container spacing={2}>
								<Grid style={{ textAlign: 'center' }} item xs={6}><Button status={sLaunch ? 'active' : ''} onClick={() => handleSpaceFilter(true, 'launch')} title={'True'} /> </Grid>
								<Grid style={{ textAlign: 'center' }} item xs={6}><Button status={sLaunch === false ? 'active' : ''} onClick={() => handleSpaceFilter(false, 'launch')} title={'False'} /></Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={12}><Header title={'Launch Year'} /></Grid>
						<Grid item xs={12}>
							<Grid container spacing={2}>
								<Grid style={{ textAlign: 'center' }} item xs={6}><Button status={sLanding ? 'active' : ''} onClick={() => handleSpaceFilter(true, 'landing')} title={'True'} /> </Grid>
								<Grid style={{ textAlign: 'center' }} item xs={6}><Button status={sLanding === false ? 'active' : ''} onClick={() => handleSpaceFilter(false, 'landing')} title={'False'} /></Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
