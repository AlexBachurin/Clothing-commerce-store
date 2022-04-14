import React from "react";
import "./formInput.styles.scss";
const FormInput = ({ label, ...props }) => {
	return (
		<div className="form-group">
			{/* spread all props such as value onchange etc... */}
			<input className="form-input" {...props} />
			<label
				// if we have something in input then add shrink class(move label to top)
				className={`${props.value.length ? "shrink" : null} form-input-label`}
				htmlFor={props.name}
			>
				{label}
			</label>
		</div>
	);
};

export default FormInput;
