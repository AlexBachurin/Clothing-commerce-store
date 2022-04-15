import React from "react";
import "./cartItem.styles.scss";
const CartItem = ({ id, name, imageUrl, quantity, price }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<h2>{name}</h2>
			{/* <span>{imageUrl}</span> */}
			<span>{quantity}</span>
			<span>{price}</span>
		</div>
	);
};

export default CartItem;
