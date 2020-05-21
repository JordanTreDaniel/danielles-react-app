import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import FullInfoForm from '../components/FullInfoForm';
import DHRRealLife from '../images/DHR-logo-real-life.jpg';
const useStyles = makeStyles((theme) => {
	return {
		homeGridContainer: {
			height: '100%',
			width: '100vw',
			paddingTop: '1em'
		}
	};
});

function Buy() {
	const classes = useStyles();
	return (
		<Container classes={{ root: classes.homeGridContainer }} maxWidth="md">
			<Typography title="You Buy Now!" variant="h1" />
			<FullInfoForm />
		</Container>
	);
}

export default Buy;
