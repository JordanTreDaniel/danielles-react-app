import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	pageLinkBtn: {
		margin: 'auto',
		textAlign: 'center'
	},
	link: {
		textDecoration: 'none'
	}
}));

export default function PageCard(props) {
	const classes = useStyles();

	return (
		<Grid lg={3} xs={6} item classes={{ root: classes.root }}>
			<Link to={`/${props.pageName.toLowerCase()}`} className={classes.link}>
				<Paper classes={{ root: classes.pageLinkBtn }}>
					<Typography variant="h2" align="center">
						{props.pageName}
					</Typography>
				</Paper>
			</Link>
		</Grid>
	);
}
