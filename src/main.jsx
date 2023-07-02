import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NewPaletteForm from "./components/NewPaletteForm.jsx";
import "./index.css";
import PaletteRoute from "./routes/PaletteRoute.jsx";
import SinglePaletteRoute from "./routes/SinglePaletteRoute.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/palette/create",
		element: <NewPaletteForm />,
	},
	{
		path: "/palette/:id",
		element: <PaletteRoute />,
	},
	{
		path: "/palette/:paletteId/:colorId",
		element: <SinglePaletteRoute />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CssBaseline />
		<RouterProvider router={router} />
	</React.StrictMode>
);
