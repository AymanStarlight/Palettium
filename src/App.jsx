import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PaletteList from "./components/PaletteList";
import PaletteFormRoute from "./routes/PaletteFormRoute.jsx";
import PaletteRoute from "./routes/PaletteRoute.jsx";
import SinglePaletteRoute from "./routes/SinglePaletteRoute.jsx";
import seedColors from "./seedColors";

function App() {
	const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
	const [palettes, setPalettes] = useState(savedPalettes || seedColors);

	const removePalette = (id) => {
		setPalettes((pts) => pts.filter((pt) => pt.id !== id));
	};

	const savePalette = (newPalette) => {
		setPalettes([...palettes, newPalette]);
	};

	useEffect(() => {
		window.localStorage.setItem("palettes", JSON.stringify(palettes));
	}, [palettes]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<PaletteList palettes={palettes} removePalette={removePalette} />
			),
		},
		{
			path: "/palette/create",
			element: (
				<PaletteFormRoute palettes={palettes} savePalette={savePalette} />
			),
		},
		{
			path: "/palette/:id",
			element: <PaletteRoute palettes={palettes} />,
		},
		{
			path: "/palette/:paletteId/:colorId",
			element: <SinglePaletteRoute palettes={palettes} />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
