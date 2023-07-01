import { Slider } from "@mui/material";
export default function NavBar({ level, changeLevel }) {
	return (
		<header className="flex items-center justify-start h-[6vh]">
			<div className="logo mr-[15px] px-[13px] py-0 text-[22px] bg-[#eceff1] h-full flex items-center">
				<a href="/" className="text-black">
					reactcolorpicker
				</a>
			</div>
			<div className="slider-container flex items-center justify-center">
				<span className="mr-7 font-medium">Level: {level}</span>
				<div className="slider">
					<Slider
						sx={{
							width: 340,
							mt: 0.8,
							color: "grey",
							display: "inline-block",
							height: 8,
							"& .MuiSlider-track": {
								border: "none",
							},
							"& .MuiSlider-thumb": {
								height: 24,
								width: 24,
								backgroundColor: "#fff",
								border: "2px solid currentColor",
								"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
									boxShadow: "inherit",
								},
								"&:before": {
									display: "none",
								},
							},
						}}
						aria-label="color-shade"
						defaultValue={500}
						step={100}
						marks
						min={100}
						max={900}
						onChange={changeLevel}
						track={false}
						size="medium"
					/>
				</div>
			</div>
		</header>
	);
}
