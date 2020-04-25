import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { DialogActions, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import BasicInfoForm from './BasicInfoForm';
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	dialogTitle: {
		fontWeight: theme.typography.fontWeightMedium,
		textAlign: 'center',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText
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

export default function BasicInfoDialog(props) {
	const classes = useStyles();
	const [ allowMarketing, setAllowMarketing ] = useState(true);
	return (
		<Dialog classes={{}} maxWidth="lg" onClose={() => props.toggleBasicInfoDialog(false)} open={true}>
			<DialogTitle className={classes.dialogTitle}>Nice to Meet You :)</DialogTitle>
			<DialogContent>
				<BasicInfoForm />
			</DialogContent>
			{/* <DialogActions>
                <Button></Button>
            </DialogActions> */}
		</Dialog>
	);
}
