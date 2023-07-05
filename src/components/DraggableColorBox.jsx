import DeleteIcon from "@mui/icons-material/Delete";
import chroma from "chroma-js";
import "../styles/DraggableColorBox.css";

export default function DraggableColorBox({ name, color, handleDelete }) {
	const isDarkColor = chroma(color).luminance() >= 0.08;
	return (
		<div
			className="w-1/5 h-1/4 mx-o my-auto inline-block relative cursor-pointer mb-[-7px]"
			style={{ backgroundColor: color }}
		>
			<div className="dark-text absolute w-full left-0 bottom-0 p-[10px] tracking-[1px] uppercase text-[12px] flex justify-between">
				<span className={`${!isDarkColor && "light-text"}`}>{name}</span>
				<DeleteIcon
					onClick={handleDelete}
					className={`hover:text-white hover:scale-[1.25] ${
						!isDarkColor && "light-text"
					}`}
				/>
			</div>
		</div>
	);
}
