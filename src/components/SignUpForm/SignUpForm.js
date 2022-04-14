import React, { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
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
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div>
			<h2>Sign up with your email and password</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="displayName">Display Name</label>
				<input
					onChange={handleChange}
					value={formFields.displayName}
					name="displayName"
					type="text"
					required
				/>

				<label htmlFor="email">Email</label>
				<input
					onChange={handleChange}
					value={formFields.email}
					name="email"
					type="email"
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					onChange={handleChange}
					value={formFields.password}
					name="password"
					type="password"
					required
				/>

				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					onChange={handleChange}
					value={formFields.confirmPassword}
					name="confirmPassword"
					type="password"
					required
				/>

				<button type="submit">sign up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
