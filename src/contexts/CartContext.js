import React, { useContext, useState, useEffect } from "react";
import { useProductsContext } from "./ProductsContext";

const initialState = {
	cart: [],
	isCartOpen: false,
	setIsCartOpen: () => {},
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [amount, setAmount] = useState(0);

	//GET PRODUCTS
	const { products } = useProductsContext();

	// TOGGLE CART
	const openCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	//ADD ITEM TO CART
	const addToCart = (id) => {
		setIsCartOpen(true);
		//find clicked item by id
		const item = products.find((item) => item.id === id);
		//create new item based on clicked item, since we need quantity
		let newItem = {
			...item,
			quantity: 1,
		};
		//check if we have same item in cart array we increase quantity of item instead of adding it again
		let checkItem = cart.find((item) => item.id === id);
		if (checkItem) {
			//iterate through array and change item quantity if their id's match, in default just return item
			const newCart = cart.map((item) => {
				if (item.id === checkItem.id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			setCart(newCart);
		}
		//add it to state cart array
		else {
			setCart([...cart, newItem]);
		}
	};

	//calculate amount every time cart state changes
	useEffect(() => {
		const calcAmount = cart.reduce((acc, cur) => {
			return (acc += cur.quantity);
		}, 0);

		setAmount(calcAmount);
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				openCart,
				addToCart,
				cart,
				amount,
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
