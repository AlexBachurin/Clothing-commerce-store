import React from "react";
import "./cartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useCartContext } from "../../contexts/CartContext";
const CartIcon = () => {
	const { openCart, amount } = useCartContext();
	return (
		<div onClick={() => openCart()} className="cart-icon-container">
			<ShoppingIcon className="cart-icon" />
			<span className="cart-amount">{amount}</span>
		</div>
	);
};

export default CartIcon;
