import NewPaletteForm from "../components/NewPaletteForm";

function PaletteFormRoute({ palettes, savePalette }) {
	return <NewPaletteForm palettes={palettes} savePalette={savePalette} />;
}

export default PaletteFormRoute;
