import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default function PaletteList(props) {
	return (
		<div className="palette-list">
			<h1>React Colors</h1>
			{props.palettes.map((palette) => (
				<MiniPalette key={palette.id} {...palette} />
			))}
		</div>
	);
}
