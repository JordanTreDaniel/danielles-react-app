import React from 'react';
import { Typography, Grid, Container, Avatar, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DHRColorPng from '../images/DHR-color-logo.png';
import PageCard from '../components/PageCard';
const useStyles = makeStyles((theme) => {
	return {
		homeGridContainer: {
			height: '100%',
			width: '100vw',
			paddingTop: '1em'
		},
		mainHeaderDiv: {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'nowrap',
			alignItems: 'center'
		},
		headerDiv: {},
		subHeaderDiv: {},
		introTextContainer: {
			width: '100%'
		},
		introText: {
			padding: theme.spacing(1),
			width: '66%',
			margin: 'auto'
		},
		pageLinksDiv: {
			display: 'flex',
			maxHeight: '50vh',
			minHeight: '25vh',
			margin: 'auto',
			flexWrap: 'wrap',
			// flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center'
		},
		divider: {
			marginTop: '1.5em',
			marginBottom: '1.5em'
		}
	};
});

function Home() {
	const classes = useStyles();
	return (
		<Grid container classes={{ root: classes.homeGridContainer }}>
			<Container>
				<div className={classes.headerDiv}>
					<div className={classes.mainHeaderDiv}>
						<Avatar src={DHRColorPng} size="md" />
						<Typography align="center" noWrap color="primary" display="block" variant="h5">
							Dream Home Realty
						</Typography>
					</div>
					<div className={classes.subHeaderDiv}>
						<Typography align="center" color="primary" display="block" variant="h4">
							Danielle Christley
						</Typography>
					</div>
				</div>
				<Paper variant="elevated" className={classes.introTextContainer}>
					<Typography variant="body1" className={classes.introText} align="center">
						Hello, My name is Danielle Christley. I am Houston’s Real Estate Agent. I look forward to making
						your real estate transactions a smooth & stress free experience. I am here to help you
						understand every step of the process and ensure you the best outcome possible for your needs. So
						Tell me! Are you looking to:
					</Typography>
				</Paper>
				<Divider variant="fullwidth" classes={{ root: classes.divider }} />
				<Grid container className={classes.pageLinksDiv} justify="center">
					<PageCard cardTitle="Buy" />
					<PageCard cardTitle="Sell" />
					<PageCard cardTitle="Lease" />
					<PageCard cardTitle="Invest" />
				</Grid>
			</Container>
		</Grid>
	);
}

export default Home;
