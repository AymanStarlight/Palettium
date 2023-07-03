import { useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFotter from "./PaletteFotter";

function Palette(props) {
	const [level, setLevel] = useState(500);
	const [format, setFormat] = useState("hex");
	const { colors, paletteName, emoji, id } = props.palette;
	const colorBoxes = colors[level].map((color) => {
		return (
			<ColorBox
				key={color.id}
				background={color[format]}
				name={color.name}
				colorId={color.id}
				paletteId={id}
				singleColor={false}
			/>
		);
	});
	const changeLevel = (e) => {
		setLevel(e.target.value);
	};
	const changeFormat = (val) => {
		setFormat(val);
	};
	return (
		<div className="Palette h-screen flex flex-col overflow-hidden">
			<NavBar
				level={level}
				changeLevel={changeLevel}
				changeFormat={changeFormat}
				singleColor={false}
			/>
			<div className="Palette-colors h-[90%]">{colorBoxes}</div>
			<PaletteFotter paletteName={paletteName} emoji={emoji} />
		</div>
	);
}

export default Palette;
