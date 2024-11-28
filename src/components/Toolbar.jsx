// Toolbar.jsx
import AlignButtons from "./format-buttons/AlignButtons";
import BIUS_Buttons from "./format-buttons/BIUS_Buttons";
import FontButtons from "./format-buttons/FontButtons";
import ScriptButtons from "./format-buttons/ScriptButtons";

import { BackgroundColor, ForeColor } from "./format-buttons/ColorButton";
import ShowHTML from "./format-buttons/ShowHTML";
import DownloadButton from "./download/DownloadButton";
import ThemeButton from "./ThemeButton";

const Toolbar = ({
	formatText,
	setAlignment,
	handleFontSizeChange,
	handleFontFamilyChange,
	setScript,
	handleForeColor,
	handleBackColor,
	showCode,
	handleFormatChange,
}) => {
	return (
		<div className="flex flex-wrap mb-4 space-x-2 gap-y-2">
			<BIUS_Buttons formatText={formatText} />
			<FontButtons
				handleFontSizeChange={handleFontSizeChange}
				handleFontFamilyChange={handleFontFamilyChange}
			/>
			<AlignButtons setAlignment={setAlignment} />
			<ScriptButtons setScript={setScript} />
			<ForeColor handleForeColor={handleForeColor} />
			<BackgroundColor handleBackColor={handleBackColor} />
			{/*<ShowHTML showCode={showCode} />*/}
			<DownloadButton handleFormatChange={handleFormatChange} />
			<ThemeButton />
		</div>
	);
};

export default Toolbar;
