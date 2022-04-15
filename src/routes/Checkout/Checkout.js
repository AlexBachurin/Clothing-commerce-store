import React from "react";
import "./checkout.styles.scss";

const Checkout = () => {
	return (
		<div className="checkout-container">
			<div className="checkout-title">
				<p>Product</p>
				<p>Description</p>
				<p>Quantity</p>
				<p>Price</p>
				<p>Remove</p>
			</div>
			<hr />
			<div className="checkout-item">
				<div>img</div>
				<div>name</div>
				<div className="checkout-toggle-amount">
					<span>dec</span>
					<p>amount</p>
					<span>inc</span>
				</div>
				<div>price</div>
				<div className="remove">x</div>
			</div>
		</div>
	);
};

export default Checkout;
