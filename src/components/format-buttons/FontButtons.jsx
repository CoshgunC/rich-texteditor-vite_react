import React from "react";

const FontButtons = (functions) => {
	const fonts = [
		{ value: "Arial", font_name: "Arial" },
		{ value: "Courier New", font_name: "Courier New" },
		{ value: "Times New Roman", font_name: "Times New Roman" },
		{ value: "Georgia", font_name: "Georgia" },
		{ value: "Verdana", font_name: "Verdana" },
		{ value: "Calibri", font_name: "Calibri" },
		{ value: "Matemaise", font_name: "Matemaise" },
	];

	return (
		<div className="flex flex-warp gap-2">
			<select
				onChange={(e) => functions.handleFontSizeChange(e)}
				className="btn bg-transparent"
			>
				<option value="16px">16px</option>
				<option value="20px">20px</option>
				<option value="24px">24px</option>
			</select>

			<select
				onChange={(e) => functions.handleFontFamilyChange(e)}
				className="btn bg-transparent"
			>
				{fonts.map((font) => (
					<option style={{fontFamily: font.font_name}} key={font.value} value={font.value}>
						{font.font_name}
					</option>
				))}
			</select>
		</div>
	);
};

export default FontButtons;
