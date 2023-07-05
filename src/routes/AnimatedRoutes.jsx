import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PaletteList from "../components/PaletteList";
import seedColors from "../seedColors";
import "../styles/AnimatedRoutes.css";
import PaletteFormRoute from "./PaletteFormRoute.jsx";
import PaletteRoute from "./PaletteRoute.jsx";
import SinglePaletteRoute from "./SinglePaletteRoute.jsx";

function AnimatedRoutes() {
	const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
	const [palettes, setPalettes] = useState(savedPalettes || seedColors);
	const location = useLocation();

	const removePalette = (id) => {
		setPalettes((pts) => pts.filter((pt) => pt.id !== id));
	};

	const savePalette = (newPalette) => {
		setPalettes([...palettes, newPalette]);
	};

	useEffect(() => {
		window.localStorage.setItem("palettes", JSON.stringify(palettes));
	}, [palettes]);

	return (
		<TransitionGroup>
			<CSSTransition key={location.key} classNames="fade" timeout={300}>
				<Routes location={location} key={location.key}>
					<Route
						path="/"
						element={
							<div className="page">
								<PaletteList
									palettes={palettes}
									removePalette={removePalette}
								/>
							</div>
						}
					/>
					<Route
						path="/palette/create"
						element={
							<div className="page">
								<PaletteFormRoute
									palettes={palettes}
									savePalette={savePalette}
								/>
							</div>
						}
					/>
					<Route
						path="palette/:id"
						element={
							<div className="page">
								<PaletteRoute palettes={palettes} />
							</div>
						}
					/>
					<Route
						path="palette/:paletteId/:colorId"
						element={
							<div className="page">
								<SinglePaletteRoute palettes={palettes} />
							</div>
						}
					/>
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default AnimatedRoutes;
