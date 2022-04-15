import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProductsContext } from "../../contexts/ProductsContext";
import "./shop.styles.scss";

const Shop = () => {
	const { products } = useProductsContext();
	return (
		<div className="products-container">
			{products.map((item) => {
				return <ProductCard key={item.id} {...item} />;
			})}
		</div>
	);
};

export default Shop;
