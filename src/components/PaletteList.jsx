import { Link } from "react-router-dom";

export default function PaletteList(props) {
	return (
		<div className="palette-list">
			<h1>React Colors</h1>
			{props.palettes.map((palette) => (
				<p key={palette.id}>
					<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
				</p>
			))}
		</div>
	);
}
