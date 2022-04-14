import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";
import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
const SignIn = () => {
	const logGoogleUser = async () => {
		const res = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(res.user);
	};

	//sign in with google redirect functionality
	useEffect(() => {
		const loginWithGoogleRedirect = async () => {
			const res = await getRedirectResult(auth);
			if (res) {
				const userDocRef = await createUserDocumentFromAuth(res.user);
			}
		};
		loginWithGoogleRedirect();
	}, []);
	return (
		<div>
			SignIn
			<button onClick={logGoogleUser}>sign in with goggle</button>
		</div>
	);
};

export default SignIn;
