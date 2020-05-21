import React from 'react';
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
	const { handleClick } = props;
	return (
		<Grid lg={3} xs={6} item classes={{ root: classes.root }}>
			<Paper classes={{ root: classes.pageLinkBtn }} onClick={handleClick}>
				<Typography variant="h2" align="center">
					{props.pageName}
				</Typography>
			</Paper>
		</Grid>
	);
}
