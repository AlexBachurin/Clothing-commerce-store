import React from "react";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
const SignIn = () => {
	const logGoogleUser = async () => {
		const res = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(res.user);
	};
	return (
		<div>
			SignIn
			<button onClick={logGoogleUser}>sign in with goggle</button>
		</div>
	);
};

export default SignIn;
