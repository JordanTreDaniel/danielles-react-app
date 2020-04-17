import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		flexGrow: 1
	},
	pageLinkBtn: {
		margin: 'auto',
		textAlign: 'center'
	}
}));

export default function PageCard(props) {
	const classes = useStyles();

	return (
		<Grid xl={3} xs={1} item classes={{ root: classes.root }}>
			<Button classes={{ root: classes.pageLinkBtn }}>{props.cardTitle}</Button>
		</Grid>
	);
}
