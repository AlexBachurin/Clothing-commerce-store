import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./authentication.styles.scss";

const Authentication = () => {
	//sign in with google redirect functionality
	// useEffect(() => {
	// 	const loginWithGoogleRedirect = async () => {
	// 		const res = await getRedirectResult(auth);
	// 		if (res) {
	// 			const userDocRef = await createUserDocumentFromAuth(res.user);
	// 		}
	// 	};
	// 	loginWithGoogleRedirect();
	// }, []);
	return (
		<div className="auth-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
