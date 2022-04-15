import React, { useContext, useState, useEffect } from "react";
import SHOP_DATA from "../shopdata.json";

const initialState = {
	products: [],
};

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(SHOP_DATA);
	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

//global
export const useProductsContext = () => {
	return useContext(ProductsContext);
};

export { ProductsProvider };
