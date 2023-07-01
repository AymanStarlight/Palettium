export default function MiniPalette({ colors, emoji, paletteName }) {
	return (
		<div className="container bg-white rounded-md p-[0.5rem] relative overflow-hidden hover:cursor-pointer border-solid border-2 border-black">
			<div className="colors bg-[gray] "></div>
			<h5 className="title flex justify-between items-center m-0 text-black pt-[0.5rem] text-base relative">
				{paletteName} <span className="ml-[0.5rem] text-[1.5rem]">{emoji}</span>
			</h5>
		</div>
	);
}
