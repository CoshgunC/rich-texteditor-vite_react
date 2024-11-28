import React from "react";

import { FaCode } from "react-icons/fa";

const ShowHTML = ({ showCode }) => {
	return (
		<button onClick={showCode} className="btn">
			<FaCode size={24} />
		</button>
	);
};

export default ShowHTML;
