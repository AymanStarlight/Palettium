import "./App.css";
import { generatePalette } from "./colorHelpers";
import Palette from "./components/Palette";
import seedColors from "./seedColors";

function App() {
	return (
		<>
			<Palette palette={generatePalette(seedColors[3])} />
		</>
	);
}

export default App;
