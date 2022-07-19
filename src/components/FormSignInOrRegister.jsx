import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Box, Button } from '@mui/material';
import {
	auth,
	registerUserWithEmailAndPass,
	signInUserWithEmailAndPass,
} from '../authentication/firebase';

const FormSignInOrRegister = ({ signInOrRegister }) => {
	const navigate = useNavigate();
	const [user, isLoading] = useAuthState(auth);

	const [credential, setCredential] = useState({
		email: '',
		password: '',
	});

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
				<Box
					sx={{
						width: 300,
						height: 300,
						backgroundColor: 'cyan',
						opacity: [0.9, 0.8, 0.7],
					}}
                >
                    <Grid xs={6}>
                        <img src="../../public/logo192.png" alt="tes" />
                    </Grid>
                    <Grid
                        xs={6}
						spacing={3}
						direction={'column'}
						justify={'center'}
						alignItems={'center'}
					>
						<Grid item xs={12}>
							<TextField label='Email' type={'email'} value={credential.email} onChange={textEmailOnChangHandler}></TextField>
						</Grid>
						<Grid item xs={12}>
                            <TextField label='Password' type={'password'} value={credential.password} onChange={textPassOnChangeHandler}></TextField>
						</Grid>
						<Grid item xs={12}>
                            <Button fullWidth onClick={buttonSignInOrRegisterHandler} >{ signInOrRegister === 'signin' ? 'SignIn' : 'Register' }</Button>
						</Grid>
					</Grid>
				</Box>
			</div>
		</>
	);
};

export default FormSignInOrRegister;
