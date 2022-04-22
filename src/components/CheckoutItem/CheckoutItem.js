import React from "react";
import { useCartContext } from "../../contexts/CartContext";
import "./checkoutItem.styles.scss";

const CheckoutItem = ({ id, imageUrl, name, quantity, price }) => {
	const { toggleAmount, deleteItemFromCart } = useCartContext();
	return (
		<div key={id} className="checkout-item">
			<div className="img-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>

			<div className="quantity">
				<div onClick={() => toggleAmount(id, "dec")} className="arrow">
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div onClick={() => toggleAmount(id, "inc")} className="arrow">
					&#10095;
				</div>
			</div>

			<span className="price">{price}</span>
			<div className="remove" onClick={() => deleteItemFromCart(id)}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
