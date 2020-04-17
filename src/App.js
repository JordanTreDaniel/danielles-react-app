import React from 'react';
import { Grid } from '@material-ui/core';
import logo from './logo.svg';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Lease from './pages/Lease';
import Invest from './pages/Invest';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		App: {
			height: '100vh',
			width: '100vw'
		},
		navBar: {},
		pageWindow: {
			width: '100%',
			height: '100%'
		}
	};
});

function App() {
	const classes = useStyles();
	return (
		<Router>
			<NavBar classes={{ root: classes.navBar }} />
			<Grid container classes={{ root: classes.App }}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/buy">
						<Buy />
					</Route>
					<Route exact path="/sell">
						<Sell />
					</Route>
					<Route exact path="/lease">
						<Lease />
					</Route>
					<Route exact path="/invest">
						<Invest />
					</Route>
				</Switch>
			</Grid>
			<Footer />
		</Router>
	);
}

export default App;
