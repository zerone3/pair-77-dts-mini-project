// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCKSnvPWr4_FwYmZwskaI5NeN207tcW32s',
	authDomain: 'zerone3-dts2022.firebaseapp.com',
	projectId: 'zerone3-dts2022',
	storageBucket: 'zerone3-dts2022.appspot.com',
	messagingSenderId: '941234519428',
	appId: '1:941234519428:web:8ef90d229269f2d29531d1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerUserWithEmailAndPass = async (email, password) => {
	try {
		const getUser = await createUserWithEmailAndPassword(auth, email, password);
		console.log(getUser);
	} catch (err) {
		console.log(err.code);
		console.log(err.message);
	}
};

const signInUserWithEmailAndPass = async (email, password) => {
	try {
        const getUser = await signInUserWithEmailAndPass(email, password);
		console.log(getUser);
	} catch (err) {
		console.log(err);
	}
};

const resetPassword = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		console.log('email sudah dikirimkan');
	} catch (err) {
		console.log(err);
	}
};

const signOutUser = async () => {
	try {
		await signOutUser();
	} catch (err) {
		console.log(err);
	}
};

export {
	auth,
	registerUserWithEmailAndPass,
	signInUserWithEmailAndPass,
	resetPassword,
	signOutUser,
};
