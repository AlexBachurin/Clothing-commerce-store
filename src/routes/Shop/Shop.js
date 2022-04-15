import React from "react";
import { useProductsContext } from "../../contexts/ProductsContext";

const Shop = () => {
	const { products } = useProductsContext();
	return (
		<div>
			{products.map((item) => {
				return (
					<div key={item.id}>
						<h1>{item.name}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default Shop;
