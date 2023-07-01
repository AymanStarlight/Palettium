import { useParams } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import SingleColorPalette from "../components/SingleColorPalette";
import seedColors from "../seedColors";

const findPalette = (id) => {
	return seedColors.find((palette) => {
		return palette.id === id;
	});
};

export default function SinglePaletteRoute() {
	const { paletteId, colorId } = useParams();
	return (
		<SingleColorPalette
			palette={generatePalette(findPalette(paletteId))}
			color={colorId}
		/>
	);
}
