// Editor.jsx
"use client";

import { useState, useRef, useCallback } from "react";
import Toolbar from "./components/Toolbar";

import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";

const Editor = () => {
	const [fontSize, setFontSize] = useState("16px");
	const [fontFamily, setFontFamily] = useState("Arial");
	const [foreColor, setForeColor] = useState("#000000");
	const [backColor, setBackColor] = useState("#ffffff00");

	const editorRef = useRef(null);

	const formatText = (command, value = null) => {
		document.execCommand(command, false, value);
	};

	const setAlignment = (align) => {
		document.execCommand("justify" + align, false, null);
	};

	const setScript = (script) => {
		document.execCommand(script + "script", false, null);
	};

	const handleFontSizeChange = (e) => {
		setFontSize(e.target.value);
		formatText("fontSize", e.target.value);
	};

	const handleFontFamilyChange = (e) => {
		setFontFamily(e.target.value);
		formatText("fontName", e.target.value);
	};

	const handleForeColor = (e) => {
		// Ensure e.target is defined and has a value property
		if (e && e.target && e.target.value) {
			setForeColor(e);
			document.execCommand("foreColor", false, e.target.value);
		} else {
			console.log("Why is this wrong?? We both don't know", "color:red");
			console.error(e);
		}
	};

	const handleBackColor = (e) => {
		// Ensure e.target is defined and has a value property
		if (e && e.target && e.target.value) {
			setBackColor(e);
			document.execCommand("backColor", false, e.target.value);
		} else {
			console.error("Why is this wrong?? We both don't know");
			console.error(e);
		}
	};

	const [codeActive, setCodeActive] = useState(false);

	const showCode = useCallback(() => {
		console.log(codeActive)
		setCodeActive((prevCodeActive) => {
			const newCodeActive = !prevCodeActive;

			if (newCodeActive) {
				// Switch to code view
				console.log("Switching to code view");
				if (editorRef.current) {
					// Save HTML content as text content
					editorRef.current.textContent = editorRef.current.innerHTML;
				}
			} else {
				// Switch to rich text view
				console.log("Switching to rich text view");
				if (editorRef.current) {
					// Restore HTML content from text content
					const html = editorRef.current.textContent;
					// Use a temporary DOM parser to convert text content back to HTML
					const parser = new DOMParser();
					const doc = parser.parseFromString(html, "text/html");
					editorRef.current.innerHTML = doc.body.innerHTML;
				}
			}

			return !newCodeActive;
		});
	}, [codeActive]);

	const handleFormatChange = (e) => {
		const format = e.target.value;
		const content = editorRef.current.innerText;

		if (format === "txt") {
			downloadAsTxt(content);
		} else if (format === "docx") {
			downloadAsDocx(content);
		} else if (format === "pdf") {
			downloadAsPdf(content);
		} else if (format === "doc") {
			downloadAsDoc(content);
		}
	};

	const downloadAsTxt = (content) => {
		const blob = new Blob([content], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		let randomFileName = generateRandomLetters(16);
		a.download = `texteditor_${randomFileName}.txt`;
		a.click();
		URL.revokeObjectURL(url);
	};

	const downloadAsDoc = (content) => {
		const doc = new Document({
			sections: [
				{
					properties: {},
					children: [
						new Paragraph({
							children: [new TextRun(content)],
						}),
					],
				},
			],
		});

		Packer.toBlob(doc).then((blob) => {
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			let randomFileName = generateRandomLetters(16);
			a.download = `texteditor_${randomFileName}.doc`;
			a.click();
			URL.revokeObjectURL(url);
		});
	};

	const downloadAsDocx = (content) => {
		const doc = new Document({
			sections: [
				{
					properties: {},
					children: [
						new Paragraph({
							children: [new TextRun(content)],
						}),
					],
				},
			],
		});

		Packer.toBlob(doc).then((blob) => {
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			let randomFileName = generateRandomLetters(16);
			a.download = `texteditor_${randomFileName}.docx`;
			a.click();
			URL.revokeObjectURL(url);
		});
	};

	const downloadAsPdf = (content) => {
		const doc = new jsPDF();
		doc.text(content, 10, 10);
		let randomFileName = generateRandomLetters(16);
		doc.save(`texteditor_${randomFileName}.pdf`);
	};

	function generateRandomLetters(length) {
		const letters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
		let result = "";
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * letters.length);
			result += letters[randomIndex];
		}
		return result;
	}

	return (
		<div className="w-full flex flex-col h-screen p-4">
			<Toolbar
				formatText={formatText}
				setAlignment={setAlignment}
				handleFontSizeChange={handleFontSizeChange}
				handleFontFamilyChange={handleFontFamilyChange}
				setScript={setScript}
				handleBackColor={handleBackColor}
				handleForeColor={handleForeColor}
				showCode={showCode}
				handleFormatChange={handleFormatChange}
			/>
			<div
				ref={editorRef}
				contentEditable="true"
				className="flex-1 border-[1.8px] border-slate-400 p-4 bg-white rounded-md dark:text-white"
				style={{
					fontSize,
					fontFamily,
					overflow: "auto",
					color: foreColor,
					background: backColor,
				}}
			/>
		</div>
	);
};

export default Editor;
