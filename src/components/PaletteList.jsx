import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/PaletteList.css";
import MiniPalette from "./MiniPalette";

export default function PaletteList({ palettes, removePalette }) {
	return (
		<div className="palette-list h-screen flex items-start justify-center">
			<div className="container w-1/2 flex items-start flex-wrap flex-col ">
				<nav className="flex justify-between items-center w-full text-white my-4">
					<p className="text-4xl">React Colors</p>
					<Link to="/palette/create" className="text-xl underline mr-3">
						Create Palette
					</Link>
				</nav>

				<TransitionGroup className="palettes">
					{palettes.map((palette) => (
						<CSSTransition key={palette.id} classNames="fade" timeout={300}>
							<MiniPalette
								key={palette.id}
								removePalette={removePalette}
								{...palette}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</div>
	);
}
