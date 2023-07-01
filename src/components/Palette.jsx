import { useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";

function Palette(props) {
	const [level, setLevel] = useState(500);
	const [format, setFormat] = useState("hex");
	const { colors, paletteName, emoji } = props.palette;
	const colorBoxes = colors[level].map((color) => {
		return (
			<ColorBox key={color.id} background={color[format]} name={color.name} />
		);
	});
	const changeLevel = (e) => {
		setLevel(e.target.value);
	};
	const changeFormat = (val) => {
		setFormat(val);
	};
	return (
		<div className="Palette h-screen flex flex-col">
			<NavBar
				level={level}
				changeLevel={changeLevel}
				changeFormat={changeFormat}
			/>
			<div className="Palette-colors h-[90%]">{colorBoxes}</div>
			<footer className="bg-white h-[5vh] flex justify-end items-center font-semibold">
				{paletteName}
				<span className="emoji text-[1.5rem] mx-4 my-0">{emoji}</span>
			</footer>
		</div>
	);
}

export default Palette;
