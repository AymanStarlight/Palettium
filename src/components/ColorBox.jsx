import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Link } from "react-router-dom";
import "../styles/ColorBox.css";

function ColorBox({ background, name }) {
	const [copyOverlay, setCopyOverlay] = useState(false);
	const changeCopyState = () => {
		setCopyOverlay(true);
		setTimeout(() => {
			setCopyOverlay(false);
		}, 1500);
	};
	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div
				style={{ background }}
				className="ColorBox group w-1/5 h-1/4 mx-o my-auto inline-block relative cursor-pointer mb-[-6.5px]"
			>
				<div
					className={`copy-overlay opacity-0 z-0 w-full h-full transition-[transform] ease-in-out duration-700 ${
						copyOverlay && "opacity-100 scale-[50] z-10 absolute"
					}`}
					style={{ background }}
				/>
				<div
					className={`copy-msg ${copyOverlay && "show"}`}
					// className={` copy-msg fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center text-[4rem] opacity-0 text-white ${
					// 	copyOverlay &&
					// 	`opacity-100 scale-1 z-20 transition duration-400 ease-in-out delay-300`
					// }`}
				>
					<h1 className="font-normal bg-white/20 w-full text-center mb-0 p-4">
						COPIED!
					</h1>
					<p className="text-[2rem]">{background}</p>
				</div>
				<div className="copy-container">
					<div className=" absolute w-full left-0 bottom-0 p-[10px] text-black tracking-[1px] uppercase text-[12px] box-border">
						<span>{name}</span>
					</div>
					<button className="group-hover:opacity-100 copy-btn w-[100px] h-[30px] absolute inline-block top-1/2 left-1/2 ml-[-50px] mt-[-15px] text-center outline-none text-base leading-[30px] text-white uppercase border-none opacity-0 bg-white/[0.3] transition ease-linear duration-400">
						COPY
					</button>
					<Link to="/" onClick={(e) => e.stopPropagation()}>
						<span className="see-more bg-white/30 absolute border-none right-0 bottom-0 text-white w-[60px] h-[30px] text-center leading-[30px]">
							MORE
						</span>
					</Link>
				</div>
			</div>
		</CopyToClipboard>
	);
}

export default ColorBox;
