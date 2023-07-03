import DraggableColorBox from "./DraggableColorBox";

function DraggablecolorList({ colors, handleDelete }) {
	return (
		<div className="h-full">
			{colors.map((color) => {
				return (
					<DraggableColorBox
						id={color.name}
						key={color.name}
						color={color.color}
						name={color.name}
						handleDelete={() => handleDelete(color.name)}
					/>
				);
			})}
		</div>
	);
}

export default DraggablecolorList;
