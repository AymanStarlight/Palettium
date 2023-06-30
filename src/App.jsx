import "./App.css";
import Palette from "./components/Palette";
import seedColors from "./seedColors";

function App() {
	return (
		<>
			<Palette {...seedColors[4]} />
		</>
	);
}

export default App;
