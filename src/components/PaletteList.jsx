import { Link } from "react-router-dom";
import "../styles/PaletteList.css";
import MiniPalette from "./MiniPalette";

export default function PaletteList({ palettes, removePalette }) {
	return (
		<div className="palette-list bg-blue-500 h-screen flex items-start justify-center">
			<div className="container w-1/2 flex items-start flex-wrap flex-col ">
				<nav className="flex justify-between items-center w-full text-white">
					<h1 className="text-3xl">React Colors</h1>
					<Link to="/palette/create" className="text-xl underline">
						Create Palette
					</Link>
				</nav>
				<div className="palettes">
					{palettes.map((palette) => (
						<MiniPalette
							key={palette.id}
							removePalette={removePalette}
							{...palette}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
