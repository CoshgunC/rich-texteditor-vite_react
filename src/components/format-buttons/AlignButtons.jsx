import React from "react";

import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight } from "react-icons/fa";

const AlignButtons = ({setAlignment}) => {
	return (
		<div className="flex flex-wrap gap-2">
			<button onClick={() => setAlignment("Left")} className="btn">
				<FaAlignLeft/>
			</button>
			<button onClick={() => setAlignment("Center")} className="btn">
				<FaAlignCenter/>
			</button>
			<button onClick={() => setAlignment("Right")} className="btn">
				<FaAlignRight/>
			</button>
			<button onClick={() => setAlignment("Justify")} className="btn">
				<FaAlignJustify/>
			</button>
		</div>
	);
};

export default AlignButtons;
