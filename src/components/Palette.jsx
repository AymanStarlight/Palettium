import { useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";

function Palette(props) {
	const [level, setLevel] = useState(500);
	const [format, setFormat] = useState("hex");
	const { colors } = props.palette;
	const colorBoxes = colors[level].map((color) => {
		return (
			<ColorBox key={color.name} background={color[format]} name={color.name} />
		);
	});
	const changeLevel = (e) => {
		setLevel(e.target.value);
	};
	const changeFormat = (val) => {
		setFormat(val);
	};
	return (
		<div className="Palette h-screen">
			<NavBar
				level={level}
				changeLevel={changeLevel}
				changeFormat={changeFormat}
			/>
			<div className="Palette-colors h-[90%]">{colorBoxes}</div>
		</div>
	);
}

export default Palette;
