import React, { useState, useEffect } from 'react';
import styles from './FormSignInOrRegister.module.css';
import {
	auth,
	registerUserWithEmailAndPass,
	signInUserWithEmailAndPass,
} from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, TextField, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const FormSignInOrRegister = ({ signInOrRegister }) => {
	const navigate = useNavigate();
	const [credential, setCredential] = useState({
		email: '',
		password: '',
	});
	const [user, isLoading] = useAuthState(auth);

	const textEmailOnChangHandler = (event) => {
		setCredential({
			...credential,
			email: event.target.value,
		});
	};

	const textPassOnChangeHandler = (event) => {
		setCredential({
			...credential,
			password: event.target.value,
		});
	};

	const signInHandler = () => {
		signInUserWithEmailAndPass(credential.email, credential.password);
	};

	const registerHandler = () => {
		registerUserWithEmailAndPass(credential.email, credential.password);
	};

	const buttonSignInOrRegisterHandler = () => {
		signInOrRegister === 'signin' ? signInHandler() : registerHandler();
	};

	useEffect(() => {
		if (isLoading) return;
		if (user) navigate('/');
	}, [isLoading, user, navigate]);

	return (
		<>
			<div style={{ padding: 30 }}>
				<Grid
					container
					spacing={0}
					direction='column'
					alignItems='center'
					justifyContent='center'
					style={{ minHeight: '95vh' }}
				>
					<Box>
						<img
							href='https://img.tek.id/img/content/2021/10/27/46199/rilis-diundur-doctor-strange-2-lakukan-syuting-tambahan-WUYV46xv6R.jpg'
							alt=''
						/>
					</Box>
					<Box className={styles.box} component='form' noValidate>
						<Typography variant='body1'>
							{signInOrRegister === 'signin' ? 'Sign In Page' : 'Register Page'}
						</Typography>

						<TextField
							label='Email'
							type='email'
							variant='outlined'
							size='small'
							value={credential.email}
							onChange={textEmailOnChangHandler}
						/>

						<TextField
							label='password'
							type='Password'
							variant='outlined'
							size='small'
							value={credential.password}
							onChange={textPassOnChangeHandler}
						/>

						<Button
							variant='outlined'
							size='small'
							onClick={buttonSignInOrRegisterHandler}
						>
							{signInOrRegister === 'signin' ? 'Sign In' : 'Register Account'}
						</Button>

						{signInOrRegister === 'signin' ? (
							<Link to='/register'>
								<Typography variant='body1'>
									or do you want Register ?
								</Typography>
							</Link>
						) : (
							<Link to='/signin'>
								<Typography variant='body1'>
									or do you want Sign In ?
								</Typography>
							</Link>
						)}
					</Box>
				</Grid>
			</div>
		</>
	);
};

export default FormSignInOrRegister;
