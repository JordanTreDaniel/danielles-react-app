import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function BasicInfoForm() {
	const classes = useStyles();
	const [ allowMarketing, setAllowMarketing ] = useState(true);
	return (
		<form className={classes.form} noValidate>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						autoComplete="name"
						name="name"
						variant="outlined"
						required
						fullWidth
						id="name"
						label="First Name"
						autoFocus
						type="text"
						x-autocompletetype="name"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						name="phone"
						label="Phone Number"
						type="phone"
						id="phone"
						autoComplete="phone"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox
								value="allowExtraEmails"
								color="primary"
								checked={allowMarketing}
								onChange={() => setAllowMarketing(!allowMarketing)}
							/>
						}
						label="I want to receive inspiration, marketing promotions and updates via email."
					/>
				</Grid>
			</Grid>
			<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
				Enter My Info
			</Button>
		</form>
	);
}
