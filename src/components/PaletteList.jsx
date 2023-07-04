import { Link } from "react-router-dom";
import "../styles/PaletteList.css";
import MiniPalette from "./MiniPalette";

export default function PaletteList({ palettes, removePalette }) {
	return (
		<div className="palette-list h-screen flex items-start justify-center">
			<div className="container w-1/2 flex items-start flex-wrap flex-col ">
				<nav className="flex justify-between items-center w-full text-white my-4">
					<p className="text-4xl">React Colors</p>
					<Link to="/palette/create" className="text-xl underline mr-3">
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
