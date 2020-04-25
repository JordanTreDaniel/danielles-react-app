import React, { useState } from 'react';
import {
	Button,
	Grid,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Menu,
	MenuItem
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { format, add } from 'date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
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
export default function FullInfoForm() {
	const classes = useStyles();
	const [ areaDropdownOpen, toggleAreaDropDown ] = useState(false);
	const defaultForm = {
		buyerPreApproved: true,
		creditAssessment: 'fair',
		racingLease: true,
		moveDateEarliest: format(new Date(), 'M/d/yyyy'),
		moveDateLatest: format(add(new Date(), { months: 3 }), 'M/d/yyyy'),
		desiredArea: null
	};
	const [ form, changeForm ] = useState(defaultForm);
	const { buyerPreApproved, creditAssessment, racingLease, moveDateEarliest, moveDateLatest } = form;
	const handleChangeForm = (snippet) => {
		changeForm({ ...form, ...snippet });
	};
	const renderAreaChoices = () => {
		const areaNames = [
			null,
			'Acres Home',
			'River Oaks',
			'Alief',
			'Museum District',
			'Heights',
			'Downtown',
			'Bellaire',
			'Gulfgate',
			'Katy',
			'Spring',
			'Inner Loop',
			'Galleria',
			'Other'
		];
		return areaNames.map((areaName, idx) => (
			<MenuItem
				onClick={(e) => {
					console.log('desired area change', e.target.value);
					handleChangeForm({ desiredArea: areaName });
				}}
				key={idx}
			>
				{areaName || 'Choose One'}
			</MenuItem>
		));
	};
	return (
		<form className={classes.form} noValidate>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<FormControl component="fieldset">
						<FormLabel component="legend">Have you been pre-approved for a home loan?</FormLabel>
						<RadioGroup
							aria-label="pre-approval-question"
							name="buyerPreApproved"
							value={buyerPreApproved}
							onChange={(e) => {
								console.log('pre approved change', e.target.value);
								handleChangeForm({ buyerPreApproved: e.target.value === 'true' });
							}}
						>
							<FormControlLabel value={true} control={<Radio />} label="Yes" />
							<FormControlLabel value={false} control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl component="fieldset">
						<FormLabel component="legend">How does your credit look?</FormLabel>
						<RadioGroup
							aria-label="credit-assessment-question"
							name="creditAssessment"
							value={creditAssessment}
							onChange={(e) => {
								console.log('cred assessment change', e.target.value);
								handleChangeForm({ creditAssessment: e.target.value });
							}}
						>
							<FormControlLabel value={'good'} control={<Radio />} label="Good" />
							<FormControlLabel value={'fair'} control={<Radio />} label="Fair" />
							<FormControlLabel value={'poor'} control={<Radio />} label="Poor" />
							<FormControlLabel value={'idk'} control={<Radio />} label="I don't know" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl component="fieldset">
						<FormLabel component="legend">
							Will you move into your new home before your lease expires?
						</FormLabel>
						<RadioGroup
							aria-label="racing-lease-question"
							name="racingLease"
							value={racingLease}
							onChange={(e) => {
								console.log('racing lease change', e.target.value);
								handleChangeForm({ racingLease: e.target.value === 'true' });
							}}
						>
							<FormControlLabel value={true} control={<Radio />} label="Yes" />
							<FormControlLabel value={false} control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
				</Grid>
				{racingLease && (
					<React.Fragment>
						<Grid item xs={12}>
							<FormControl component="fieldset">
								<FormLabel component="legend">
									What is the earliest date you would possibly move?
								</FormLabel>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DatePicker
										aria-label="move-date-earliest"
										name="moveDateEarliest"
										value={moveDateEarliest}
										onChange={(date) => {
											console.log('move earliest change', date);
											handleChangeForm({ moveDateEarliest: format(date, 'M/d/yyyy') });
										}}
										animateYearScrolling
									/>
								</MuiPickersUtilsProvider>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl component="fieldset">
								<FormLabel component="legend">
									What is the earliest date you would possibly move?
								</FormLabel>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DatePicker
										aria-label="move-date-latest"
										name="moveDateLatest"
										value={moveDateLatest}
										onChange={(date) => {
											console.log('move latest change', date);
											handleChangeForm({ moveDateLatest: format(date, 'M/d/yyyy') });
										}}
										animateYearScrolling
									/>
								</MuiPickersUtilsProvider>
							</FormControl>
						</Grid>
					</React.Fragment>
				)}
				<Grid item xs={12}>
					<FormControl component="fieldset">
						<FormLabel component="legend">Which area would you like to live in?</FormLabel>
						<Button
							aria-controls="desired-area-question"
							aria-haspopup="true"
							id="desired-area-button"
							onClick={() => toggleAreaDropDown(!areaDropdownOpen)}
						>
							Open Menu
						</Button>
						<Menu
							id="desired-area-question"
							// anchorEl={'desired-area-button'}
							keepMounted
							open={areaDropdownOpen}
							onClose={() => toggleAreaDropDown(false)}
						>
							{renderAreaChoices()}
						</Menu>
					</FormControl>
				</Grid>
			</Grid>
			<Button type="submit" variant="contained" color="primary" className={classes.submit}>
				Enter My Info
			</Button>
		</form>
	);
}
