import React, { useState } from 'react';
import { FormHelperText, Button, TextField, FormControlLabel, Checkbox, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
					<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
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
			<Button type="submit" variant="contained" color="primary" className={classes.submit}>
				Enter My Info
			</Button>
		</form>
	);
}
