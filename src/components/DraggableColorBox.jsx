import DeleteIcon from "@mui/icons-material/Delete";

export default function DraggableColorBox({ name, color, handleDelete }) {
	return (
		<div
			className="w-1/5 h-1/4 mx-o my-auto inline-block relative cursor-pointer mb-[-7px]"
			style={{ backgroundColor: color }}
		>
			<div className="absolute w-full left-0 bottom-0 p-[10px] text-black tracking-[1px] uppercase text-[12px] flex justify-between">
				<span>{name}</span>
				<DeleteIcon
					onClick={handleDelete}
					className="hover:text-white hover:scale-[1.25]"
				/>
			</div>
		</div>
	);
}
