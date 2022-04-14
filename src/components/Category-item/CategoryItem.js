import React from "react";
import "./CategoryItem.styles.scss";

const CategoryItem = ({ id, imageUrl, title }) => {
	return (
		<div className="category-container">
			<div
				className="category-bg-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
