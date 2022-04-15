import React from "react";
import { useCartContext } from "../../contexts/CartContext";
import Button from "../Button/Button";
import "./productCard.styles.scss";

const ProductCard = ({ id, name, price, imageUrl }) => {
	const { addToCart } = useCartContext();
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button onClick={() => addToCart(id)} buttonType="inverted">
				Add to card
			</Button>
		</div>
	);
};

export default ProductCard;
