import "../styles/PaletteList.css";
import MiniPalette from "./MiniPalette";

export default function PaletteList(props) {
	return (
		<div className="palette-list bg-blue-500 h-screen flex items-start justify-center">
			<div className="container w-1/2 flex items-start flex-wrap flex-col ">
				<nav className="flex justify-between w-full text-white">
					<h1>React Colors</h1>
				</nav>
				<div className="palettes">
					{props.palettes.map((palette) => (
						<MiniPalette key={palette.id} {...palette} />
					))}
				</div>
			</div>
		</div>
	);
}
