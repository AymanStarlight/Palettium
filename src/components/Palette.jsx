import { Slider } from "@mui/material";
import { useState } from "react";
import ColorBox from "./ColorBox";

function Palette(props) {
	const [level, setLevel] = useState(500);
	const { colors } = props.palette;
	const colorBoxes = colors[level].map((color) => {
		return (
			<ColorBox key={color.name} background={color.hex} name={color.name} />
		);
	});
	const changeLevel = (e) => {
		setLevel(e.target.value);
	};
	return (
		<div className="Palette h-screen">
			<Slider
				aria-label="color-shade"
				defaultValue={500}
				valueLabelDisplay="auto"
				step={100}
				marks
				min={100}
				max={900}
				onChange={changeLevel}
			/>
			<div className="Palette-colors h-[90%]">{colorBoxes}</div>
		</div>
	);
}

export default Palette;
