import React from "react";
import Button from "../Button/Button";
import "./cartDropDown.styles.scss";
const CartDropDown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items"></div>
			<Button>Checkout </Button>
		</div>
	);
};

export default CartDropDown;
