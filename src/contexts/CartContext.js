import React, { useContext, useState } from "react";

const initialState = {
	cart: [],
	isCartOpen: false,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const openCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				openCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

//global
export const useCartContext = () => {
	return useContext(CartContext);
};
