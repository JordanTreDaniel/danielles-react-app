import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DHRRealLife from '../images/DHR-logo-real-life.jpg';
import BasicInfoForm from '../components/BasicInfoForm';
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
			<BasicInfoForm />
		</Container>
	);
}

export default Buy;
