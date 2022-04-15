import React from "react";

import { useCartContext } from "../../contexts/CartContext";
import "./checkout.styles.scss";

const Checkout = () => {
	const { cart, toggleAmount, deleteItemFromCart, total } = useCartContext();
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
			{cart.map((item) => {
				const { id, imageUrl, name, quantity, price } = item;
				return (
					<div className="checkout-item">
						<img src={imageUrl} alt={name} />
						<div>{name}</div>
						<div className="checkout-toggle-amount">
							<span onClick={() => toggleAmount(id, "dec")}>dec</span>
							<p>{quantity}</p>
							<span onClick={() => toggleAmount(id, "inc")}>inc</span>
						</div>
						<div>{price}</div>
						<div onClick={() => deleteItemFromCart(id)} className="remove">
							x
						</div>
					</div>
				);
			})}
			<hr />
			<div className="total">
				<span>total: {total}</span>
			</div>
		</div>
	);
};

export default Checkout;
