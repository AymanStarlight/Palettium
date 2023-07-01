import { useParams } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import Palette from "../components/Palette";
import seedColors from "../seedColors";

const findPalette = (id) => {
	return seedColors.find((palette) => {
		return palette.id === id;
	});
};

function PaletteRoute() {
	const { id } = useParams();
	return (
		<>
			<Palette palette={generatePalette(findPalette(id))} />
		</>
	);
}

export default PaletteRoute;
