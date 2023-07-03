import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PaletteList from "./components/PaletteList";
import PaletteFormRoute from "./routes/PaletteFormRoute.jsx";
import PaletteRoute from "./routes/PaletteRoute.jsx";
import SinglePaletteRoute from "./routes/SinglePaletteRoute.jsx";
import seedColors from "./seedColors";

function App() {
	const [palettes, setPalettes] = useState(seedColors);

	const savePalette = (newPalette) => {
		setPalettes([...palettes, newPalette]);
		console.log(palettes);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <PaletteList palettes={palettes} />,
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
