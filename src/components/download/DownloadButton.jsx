import React, { useState } from "react";

const DownloadButton = ({ handleFormatChange }) => {
	const [choice, setChoice] = useState("doc");

	const choices = {
		doc: "Document",
		docx: "Document",
		pdf: "PDF",
		txt: "Text",
	};

	return (
		<div className="min-w-[180px] flexBox rounded-md p-2 space-x-1 cursor-pointer  dark:hover:bg-gray-900  dark:text-gray-300">
			<div className="w-3/6">{choices[choice]}</div>
			<div className="w-[1.8px] h-full bg-slate-400 rounded-full"></div>
			<select
				onChange={handleFormatChange}
				className="bg-transparent"
			>
				<option className="p-1" value="docx">
					.docx
				</option>
				<option className="p-1" value="pdf">
					.pdf
				</option>
				<option className="p-1" vlaue="txt">
					.txt
				</option>
			</select>
		</div>
	);
};

export default DownloadButton;
