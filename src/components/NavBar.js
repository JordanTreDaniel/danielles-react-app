import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DHRColorPng from '../images/DHR-color-logo.png';
const useStyles = makeStyles((theme) => {
	return {
		menuButton: { color: theme.palette.common.white },
		title: {},
		navBar: {
			position: 'relative',
			top: 0,
			left: 0,
			marginBottom: theme.spacing(2)
		},
		toolBar: {
			display: 'flex',
			justifyContent: 'space-between'
		},
		navLink: {
			textDecoration: 'none',
			color: 'white'
		}
	};
});

const NavBar = (props) => {
	const classes = useStyles();
	return (
		<AppBar position="static" classes={{ root: classes.navBar }}>
			<Toolbar classes={{ root: classes.toolBar }}>
				<Link to="/">
					<Avatar src={DHRColorPng} />
				</Link>
				<div aria-label="Navigation Bar" variant="scrollable">
					<Button className={classes.menuButton} href="/buy">
						Buy
					</Button>
					<Button className={classes.menuButton} href="/sell">
						Sell
					</Button>
					<Button className={classes.menuButton} href="/lease">
						Lease
					</Button>
					<Button className={classes.menuButton} href="/invest">
						Invest
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
