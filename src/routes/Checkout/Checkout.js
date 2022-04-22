import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import { useCartContext } from "../../contexts/CartContext";
import "./checkout.styles.scss";

const Checkout = () => {
	const { cart, total } = useCartContext();
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="title">Product</div>
				<div className="title">Description</div>
				<div className="title">Quantity</div>
				<div className="title">Price</div>
				<div className="title">Remove</div>
			</div>
			<hr />
			{cart.map((item) => {
				return <CheckoutItem key={item.id} {...item} />;
			})}
			<hr />
			<div className="total">
				<span>total: {total}</span>
			</div>
		</div>
	);
};

export default Checkout;
