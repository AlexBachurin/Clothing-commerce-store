import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignIn = () => {
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
		<div>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
