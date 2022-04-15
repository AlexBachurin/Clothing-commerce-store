import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./cartDropDown.styles.scss";
const CartDropDown = () => {
	const { cart } = useCartContext();
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cart?.length ? (
					<>
						{cart.map((item) => {
							return <CartItem key={item.id} {...item} />;
						})}
					</>
				) : (
					<span>empty cart</span>
				)}
			</div>
			<Link to="/checkout">
				<Button>Checkout </Button>
			</Link>
		</div>
	);
};

export default CartDropDown;
