import React, { createContext, useContext, useState, useEffect } from "react";
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase";
const initialState = {
	currentUser: null,
	setCurrentUser: () => null,
};

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		//check auth state and set user here, if we logged in it will be user data object
		//if we sign out it will be null
		const unsubscribe = onAuthStateChangedListener((user) => {
			console.log(user);
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
		//clear listener
		return unsubscribe;
	}, []);

	return (
		<UserContext.Provider
			value={{
				currentUser,
				setCurrentUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

//custom global hook
const useUserContext = () => {
	return useContext(UserContext);
};

export { UserProvider, useUserContext };
