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
		<>
			<Palette palette={generatePalette(findPalette(id))} />
		</>
	);
}

export default PaletteRoute;
