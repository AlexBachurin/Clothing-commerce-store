import React from "react";
import CategoryItem from "../Category-item/CategoryItem";
import "./CategoryContainer.styles.scss";
const CategoryContainer = ({ categories }) => {
	return (
		<div className="categories-container">
			{categories.map((item) => {
				return <CategoryItem {...item} key={item.id} />;
			})}
		</div>
	);
};

export default CategoryContainer;
