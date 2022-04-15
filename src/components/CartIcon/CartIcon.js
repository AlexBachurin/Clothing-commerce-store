import React from "react";
import "./cartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
	return (
		<div className="cart-icon-container">
			<ShoppingIcon className="cart-icon" />
			<span className="cart-amount">0</span>
		</div>
	);
};

export default CartIcon;
