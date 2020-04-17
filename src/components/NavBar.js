import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DHRColorPng from '../images/DHR-color-logo.png';
const useStyles = makeStyles((theme) => {
	return {
		menuButton: {},
		title: {},
		navBar: {
			position: 'absolute',
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
				<Avatar src={DHRColorPng} />
				<Tabs aria-label="Navigation Bar" variant="scrollable">
					<Link className={classes.navLink} to="/buy">
						<Tab label="Buy" />
					</Link>
					<Link className={classes.navLink} to="/sell">
						<Tab label="Sell" />
					</Link>
					<Link className={classes.navLink} to="/lease">
						<Tab label="Lease" />
					</Link>
					<Link className={classes.navLink} to="/invest">
						<Tab label="Invest" />
					</Link>
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
