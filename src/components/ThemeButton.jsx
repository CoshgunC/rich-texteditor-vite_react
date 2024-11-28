import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeButton = () => {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		const theme = localStorage.getItem("theme");

		if (theme === "dark") setDarkMode(true);
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	});

	return (
		<button
			className="btn"
			onClick={() => setDarkMode(!darkMode)}
		>
			{darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
		</button>
	);
};

export default ThemeButton;
