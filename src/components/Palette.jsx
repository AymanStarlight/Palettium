import ColorBox from "./ColorBox";

function Palette(props) {
	const colorBoxes = props.colors.map((color) => {
		return (
			<ColorBox key={color.name} background={color.color} name={color.name} />
		);
	});
	return (
		<div className="Palette h-screen">
			<div className="Palette-colors h-[90%]">{colorBoxes}</div>
		</div>
	);
}

export default Palette;
