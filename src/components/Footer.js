import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Container, AppBar } from '@material-ui/core';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		position: 'relative',
		bottom: 0,
		minHeight: '4em'
	}
}));

export default function Footer(props) {
	const classes = useStyles();
	const { description, title } = props;

	return (
		<AppBar classes={{ root: classes.footer }}>
			<Container>
				<Typography variant="h6" align="center" gutterBottom>
					{title}
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					{description}
				</Typography>
				<Copyright />
			</Container>
		</AppBar>
	);
}

Footer.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string
};
