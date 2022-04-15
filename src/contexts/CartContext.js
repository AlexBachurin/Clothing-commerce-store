import React, { useContext, useState, useEffect } from "react";
import { useProductsContext } from "./ProductsContext";

const initialState = {
	cart: [],
	isCartOpen: false,
	setIsCartOpen: () => {},
	amount: 0,
	setAmount: () => {},
	setCart: () => {},
	total: 0,
};

const CartContext = React.createContext(initialState);

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [amount, setAmount] = useState(0);
	const [total, setTotal] = useState(0);

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

	//INCREASE/DECREASE, accept id of item and type of operation (inc, dec)
	const toggleAmount = (id, type) => {
		let newCart = [];
		//check type of operation provided and do decrease or increase
		if (type === "inc") {
			newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
		} else if (type === "dec") {
			newCart = cart.map((item) => {
				if (item.id === id) {
					//check quantity so we dont go below zero
					if (item.quantity === 1) {
						return item;
					} else {
						return { ...item, quantity: item.quantity - 1 };
					}
				}
				return item;
			});
		}

		setCart(newCart);
	};

	//DELETE ITEM FROM Cart
	const deleteItemFromCart = (id) => {
		const newCart = cart.filter((item) => {
			return item.id !== id;
		});
		setCart(newCart);
	};

	//calculate amount and total every time cart state changes
	useEffect(() => {
		const calcAmount = cart.reduce((acc, cur) => {
			return (acc += cur.quantity);
		}, 0);
		setAmount(calcAmount);
		const calcTotal = cart.reduce((acc, cur) => {
			return (acc += cur.quantity * cur.price);
		}, 0);
		setTotal(calcTotal);
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				openCart,
				addToCart,
				cart,
				amount,
				toggleAmount,
				deleteItemFromCart,
				total,
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
