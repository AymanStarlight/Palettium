import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ColorBox.css";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFotter from "./PaletteFotter";

export default function SingleColorPalette({ palette, color }) {
	const gatherShades = (palette, fColor) => {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades.push(allColors[key].find((color) => color.id === fColor));
		}
		return shades.slice(1);
	};

	const [format, setFormat] = useState("hex");
	const changeFormat = (val) => {
		setFormat(val);
	};

	const shades = gatherShades(palette, color);
	const colorBoxes = shades.map((color) => {
		return (
			<ColorBox
				key={color.name}
				background={color[format]}
				name={color.name}
				singleColor={true}
			/>
		);
	});

	return (
		<div className="h-screen flex flex-col overflow-hidden">
			<NavBar changeFormat={changeFormat} singleColor={true} />
			<div className="h-[90%]">
				{colorBoxes}
				<Link to={`/palette/${palette.id}`}>
					<div className="group w-1/5 h-1/2 mx-o my-auto inline-block relative cursor-pointer mb-[-7px] bg-black">
						<span className="w-[100px] h-[30px] absolute inline-block top-1/2 left-1/2 ml-[-50px] mt-[-15px] text-center outline-none text-base leading-[30px] text-white uppercase border-none bg-white/[0.3">
							GO BACK
						</span>
					</div>
				</Link>
			</div>
			<PaletteFotter paletteName={palette.paletteName} emoji={palette.emoji} />
		</div>
	);
}
