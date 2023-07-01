export default function PaletteFotter({ paletteName, emoji }) {
	return (
		<footer className="bg-white h-[5vh] flex justify-end items-center font-semibold">
			{paletteName}
			<span className="emoji text-[1.5rem] mx-4 my-0">{emoji}</span>
		</footer>
	);
}
