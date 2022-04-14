import React, { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./signUpForm.styles.scss";

//group our inputs in 1 state
const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const handleChange = (e) => {
		const target = e.target;
		//name of input
		const name = target.name;
		//value of input
		const value = target.value;
		//based on input dynamically change related values in state
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		//if password does not match return from func
		if (formFields.password !== formFields.confirmPassword) {
			console.log("password does not match");
			return;
		}
		//get response info
		try {
			const res = await createAuthUserWithEmailAndPassword(
				formFields.email,
				formFields.password
			);
			//if we have user, then create doc of this user
			if (res.user) {
				//pass name to function
				const { displayName } = formFields;
				createUserDocumentFromAuth(res.user, { displayName });
				//reset form
				resetFormFields();
			}
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("email already in use");
			} else {
				console.log(error.message);
			}
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't Have An account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					value={formFields.displayName}
					onChange={handleChange}
					name="displayName"
					type="text"
					required
				/>
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
				<FormInput
					label="Confirm Password"
					value={formFields.confirmPassword}
					onChange={handleChange}
					name="confirmPassword"
					type="password"
					required
				/>

				<div className="form-buttons-container">
					<Button type="submit">Sign Up</Button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
