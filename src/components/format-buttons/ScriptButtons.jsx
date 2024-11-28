import React from "react";

import { FaSuperscript, FaSubscript } from "react-icons/fa";

const ScriptButtons = ({ setScript }) => {
	return (
		<div className="flex flex-warp gap-2">
			<button onClick={() => setScript("sub")} className="btn">
				<FaSubscript/>
			</button>
			<button onClick={() => setScript("super")} className="btn">
				<FaSuperscript/>
			</button>
		</div>
	);
};

export default ScriptButtons;
