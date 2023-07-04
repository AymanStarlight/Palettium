import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function MiniPalette({
	colors,
	emoji,
	paletteName,
	id,
	removePalette,
}) {
	const miniColorBoxes = colors.map((color) => (
		<div
			key={color.name}
			className={`h-1/4 w-1/5 inline-block my-0 mx-auto relative mb-[-6.5px]`}
			style={{ backgroundColor: color.color }}
		></div>
	));

	const deletePalette = (event) => {
		event.preventDefault();
		event.stopPropagation();
		removePalette(id);
	};

	return (
		<Link to={`/palette/${id}`}>
			<div className="container group bg-white rounded-md p-[0.5rem] relative overflow-hidden hover:cursor-pointer border-solid border-2 border-black h-[202px]">
				<DeleteIcon
					className="text-white bg-[#eb4d30] rounded-sm !absolute !text-[42px] right-0 top-0 z-10 p-[10px] opacity-0 group-hover:opacity-100 !transition-all !duration-300 !ease-in-out"
					onClick={deletePalette}
				/>

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
