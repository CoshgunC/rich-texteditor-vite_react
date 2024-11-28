import React from "react";

import { FaBold, FaStrikethrough, FaUnderline, FaItalic } from "react-icons/fa"

const BIUS_Buttons = ({formatText}) => {
	return (
		<div className="flex flex-wrap gap-2">
			<button onClick={() => formatText("bold")} className="btn">
				<FaBold/>
			</button>
			<button onClick={() => formatText("italic")} className="btn">
				<FaItalic/>
			</button>
			<button onClick={() => formatText("underline")} className="btn">
				<FaUnderline/>
			</button>
			<button onClick={() => formatText("strikeThrough")} className="btn">
				<FaStrikethrough/>
			</button>
		</div>
	);
};

export default BIUS_Buttons;
