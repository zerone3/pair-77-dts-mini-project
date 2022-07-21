import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../authentication/firebase';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';

const NavBar = () => {
	const navigate = useNavigate();

	const buttonSignOutHandler = async () => {
		await signOutUser();
		navigate('/users');
	};
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Typography sx={{ flexGrow: 1 }} variant='h6' component='div'>
							Home
						</Typography>
						<Typography sx={{ flexGrow: 1 }} variant='h6' component='div'>
							Series
						</Typography>
						<Typography sx={{ flexGrow: 1 }} variant='h6' component='div'>
							Movies
						</Typography>
						<Typography sx={{ flexGrow: 1 }} variant='h6' component='div'>
							New and Popular
						</Typography>
						<Typography sx={{ flexGrow: 1 }} variant='h6' component='div'>
							My List
						</Typography>
						<Button color='inherit' onClick={buttonSignOutHandler}>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default NavBar;
