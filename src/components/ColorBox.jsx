function ColorBox({ background, name }) {
	return (
		<div
			style={{ background }}
			className="ColorBox group w-1/5 h-1/4 mx-o my-auto inline-block relative cursor-pointer mb-[-6.5px]"
		>
			<div className="copy-container">
				<div className=" absolute w-full left-0 bottom-0 p-[10px] text-black tracking-[1px] uppercase text-[12px] box-border">
					<span>{name}</span>
				</div>
				<button className="group-hover:opacity-100 copy-btn w-[100px] h-[30px] absolute inline-block top-1/2 left-1/2 ml-[-50px] mt-[-15px] text-center outline-none text-base leading-[30px] text-white uppercase border-none opacity-0 bg-white/[0.3] transition ease-linear duration-400">
					COPY
				</button>
				<span className="see-more bg-white/30 absolute border-none right-0 bottom-0 text-white w-[60px] h-[30px] text-center leading-[30px]">
					MORE
				</span>
			</div>
		</div>
	);
}

export default ColorBox;
