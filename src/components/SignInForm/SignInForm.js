import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./signIn.styles.scss";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithEmailAndPasswordAuth,
} from "../../utils/firebase/firebase";
const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await signInWithEmailAndPasswordAuth(
				formFields.email,
				formFields.password
			);
			console.log(response);
		} catch (error) {
			if (error.code === "auth/wrong-password") {
				alert("incorret password");
			} else if (error.code === "auth/user-not-found") {
				alert("invalid email");
			} else {
				console.log("some error occured", error.message + error.code);
			}
		}
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormFields({ ...formFields, [name]: value });
	};

	const logGoogleUser = async () => {
		const res = await signInWithGooglePopup();
		await createUserDocumentFromAuth(res.user);
	};
	return (
		<div className="sign-in-container">
			<h2>Have An account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					value={formFields.email}
					onChange={handleChange}
					name="email"
					type="email"
					required
				/>
				<FormInput
					label="Password"
					value={formFields.password}
					onChange={handleChange}
					name="password"
					type="password"
					required
				/>

				<div className="form-buttons-container">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						style={{ lineHeight: "20px", padding: "5px 20px" }}
						buttonType="google"
						onClick={logGoogleUser}
					>
						sign in with google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
