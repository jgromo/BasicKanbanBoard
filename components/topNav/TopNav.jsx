import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './TopNav.css';

export default function TopNav() {
	
	return (
	<AppBar position="static">
		<Toolbar className="cse4050-toolbar">
			<Typography variant="h6" className="cse4050-logo">
			Project 4
			</Typography>
			<Stack
				direction="row"
				spacing={2}
				sx={{ '& a.active': {color:theme=>theme.palette.primary.contrastText, bgcolor:theme=>theme.palette.primary.main, } }}
			>	
				<Button variant="outlined" component={Link} to="/">
				  Home
				</Button>
				<Button variant="outlined" component={Link} to="/tasks">
				  Task
				</Button>
			</Stack>
		</Toolbar>
	</AppBar>
	);
}
