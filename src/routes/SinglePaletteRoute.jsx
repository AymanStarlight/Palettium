import { useParams } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import SingleColorPalette from "../components/SingleColorPalette";

export default function SinglePaletteRoute({ palettes }) {
	const { paletteId, colorId } = useParams();
	const findPalette = (id) => {
		return palettes.find((palette) => {
			return palette.id === id;
		});
	};
	return (
		<SingleColorPalette
			palette={generatePalette(findPalette(paletteId))}
			color={colorId}
		/>
	);
}
