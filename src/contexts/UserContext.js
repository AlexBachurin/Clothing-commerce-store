import React, { createContext, useContext, useState } from "react";

const initialState = {
	currentUser: null,
	setCurrentUser: () => null,
};

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
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
