import React from "react";

export const ForeColor = ({ handleForeColor }) => {
	const handleChange = (e) => {
		// Ensure the event target value is valid and pass it to the handler
		if (e.target && e.target.value) {
			handleForeColor(e);
		} else if (!e) {
			console.error("Something went wrong😓...");
		} else {
			console.error("Something went wrong😓...");
		}
	};

	return (
		<div className="btn space-x-1">
			<label htmlFor="frcolor">Text Color</label>
			<input
				onChange={handleChange} // Using onChange for better compatibility than onInput
				type="color"
				id="frcolor"
				name="color"
			/>
		</div>
	);
};

export const BackgroundColor = ({ handleBackColor }) => {
	const handleChange = (e) => {
		// Ensure the event target value is valid and pass it to the handler
		if (e.target && e.target.value) {
			handleBackColor(e);
		} else if (!e) {
			console.error("Something went wrong😓...");
		} else {
			console.error("Something went wrong😓...");
		}
	};

	return (
		<div className="btn space-x-1">
			<label htmlFor="bgcolor">Back Color</label>
			<input
				onChange={handleChange} // Using onChange for better compatibility than onInput
				type="color"
				id="bgcolor"
				name="bgcolor"
			/>
		</div>
	);
};
