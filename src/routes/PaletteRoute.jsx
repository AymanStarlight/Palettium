import { useParams } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import Palette from "../components/Palette";

function PaletteRoute({ palettes }) {
	const { id } = useParams();

	const findPalette = (id) => {
		return palettes.find((palette) => {
			return palette.id === id;
		});
	};

	return (
		<div>
			<Palette palette={generatePalette(findPalette(id))} />
		</div>
	);
}

export default PaletteRoute;
