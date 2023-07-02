export default function DraggableColorBox({ color }) {
	return (
		<div
			className="w-1/5 h-1/4 mx-o my-auto inline-block relative cursor-pointer mb-[-7px]"
			style={{ backgroundColor: color }}
		></div>
	);
}
