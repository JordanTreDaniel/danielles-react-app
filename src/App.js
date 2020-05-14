import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import logo from './logo.svg';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Lease from './pages/Lease';
import Invest from './pages/Invest';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BasicInfoDialog from './components/BasicInfoDialog';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';

function initializeReactGA() {
	ReactGA.initialize('UA-166594032-1');
	ReactGA.pageview('/home');
}

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
	const [ basicInfoDialogOpen, toggleBasicInfoDialog ] = useState(false);
	useEffect(() => {
		console.log('only once?');
		initializeReactGA();
	}, []);
	return (
		<Router>
			<CssBaseline />
			<NavBar classes={{ root: classes.navBar }} />
			<Grid container classes={{ root: classes.App }}>
				<Switch>
					<Route
						exact
						path="/"
						render={({ history }) => (
							<Home toggleBasicInfoDialog={toggleBasicInfoDialog} history={history} />
						)}
					/>
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
					<Route component={() => <Redirect to="/" />} />
				</Switch>
				{basicInfoDialogOpen && <BasicInfoDialog toggleBasicInfoDialog={toggleBasicInfoDialog} />}
			</Grid>
			<Footer />
		</Router>
	);
}

export default App;
