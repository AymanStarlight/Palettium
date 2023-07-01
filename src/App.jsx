import "./App.css";
import PaletteList from "./components/PaletteList";
import seedColors from "./seedColors";

function App() {
	return <PaletteList palettes={seedColors} />;
}

export default App;
