import React from 'react';
import { Typography, Grid, Container, Avatar, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DHRColorPng from '../images/DHR-color-logo.png';
import DHRRealLife from '../images/DHR-logo-real-life.jpg';
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
			justifyContent: 'flex-start',
			flexWrap: 'nowrap',
			alignItems: 'center'
		},
		headerDiv: {
			// backgroundColor: theme.palette.common.white,
			// opacity: '.3',
			// '& > *': {
			// 	opacity: 1
			// },
			color: theme.palette.common.white
		},
		subHeaderDiv: {},
		introTextContainer: {
			width: '100%',
			position: 'relative',
			backgroundColor: theme.palette.grey[800],
			color: theme.palette.common.white,
			marginBottom: theme.spacing(4),
			backgroundImage: `url(${DHRRealLife})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			opacity: 0.75,
			height: 'auto',
			display: 'flex',
			alignItems: 'space-between',
			flexWrap: 'wrap',
			[theme.breakpoints.down('md')]: {
				minHeight: '50vh',
				paddingTop: '2em'
			}
		},
		introText: {
			padding: theme.spacing(1),
			width: '66%',
			marginLeft: 'auto',
			fontWeight: theme.typography.fontWeightBold
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
		},
		overlay: {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			backgroundColor: 'rgba(0,0,0,.3)',
			opacity: 0.1
		}
	};
});

function Home() {
	const classes = useStyles();
	return (
		<Container classes={{ root: classes.homeGridContainer }}>
			<Paper variant="elevated" className={classes.introTextContainer}>
				<img style={{ display: 'none' }} src={DHRRealLife} alt={'Beautiful Blue Home'} />
				<div className={classes.overlay} />
				<div className={classes.headerDiv}>
					<div className={classes.mainHeaderDiv}>
						<Avatar src={DHRColorPng} size="md" />
						<Typography align="left" noWrap color="primary" display="block" component="h2" variant="h4">
							Dream Home Realty
						</Typography>
					</div>
					<div className={classes.subHeaderDiv}>
						<Typography align="left" color="primary" display="block" component="h1" variant="h3">
							Danielle Christley
						</Typography>
					</div>
				</div>
				<Typography variant="h5" className={classes.introText} align="center">
					{`Hello,
						     My name is Danielle Christley. I am Houston’s Real Estate Agent. I look forward to
						making your real estate transactions a smooth & stress free experience. I am here to help you
						understand every step of the process and ensure you the best outcome possible for your needs.
						
						So, tell me! Are you looking to:`}
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
	);
}

export default Home;
