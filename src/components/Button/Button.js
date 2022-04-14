import React from "react";
import "./button.styles.scss";
const BUTTON_TYPE_CLASS = {
	google: "google-sign-in",
	inverted: "inverted",
};

const Button = ({ children, buttonType, ...props }) => {
	return (
		//dynamically add class to button based on passed button type
		<button
			className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
