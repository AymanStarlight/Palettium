import { Link } from "react-router-dom";

export default function MiniPalette({ colors, emoji, paletteName, id }) {
	const miniColorBoxes = colors.map((color) => (
		<div
			key={color.name}
			className={`h-1/4 w-1/5 inline-block my-0 mx-auto relative mb-[-6.5px]`}
			style={{ backgroundColor: color.color }}
		></div>
	));
	return (
		<Link to={`/palette/${id}`}>
			<div className="container bg-white rounded-md p-[0.5rem] relative overflow-hidden hover:cursor-pointer border-solid border-2 border-black h-[202px]">
				<div className="colors bg-gray-200 h-[150px] w-full rounded-md overflow-hidden">
					{miniColorBoxes}
				</div>
				<h5 className="title flex justify-between items-center m-0 text-black pt-[0.5rem] text-base relative font-semibold">
					{paletteName}{" "}
					<span className="ml-[0.5rem] text-[1.5rem]">{emoji}</span>
				</h5>
			</div>
		</Link>
	);
}
