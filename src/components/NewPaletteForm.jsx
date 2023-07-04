import { ChromePicker } from "@hello-pangea/color-picker";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link, useNavigate } from "react-router-dom";
import DraggablecolorList from "./DraggablecolorList";
import PaletteMetaForm from "./PaletteMetaForm";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		height: "calc(100vh - 64px)",
		padding: 0,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	width: "100%",
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function NewPaletteForm({
	palettes,
	savePalette,
	maxColors = 20,
}) {
	const [open, setOpen] = useState(true);

	const [currentColor, setCurrentColor] = useState("tomato");
	const [colors, setColors] = useState(palettes[6].colors);
	const [newColorName, setNewColorName] = useState("");
	const [isFormShowing, setIsFormShowing] = useState(false);

	const paletteFull = colors.length >= maxColors;
	let navigate = useNavigate();

	useEffect(() => {
		ValidatorForm.addValidationRule("isColorUnique", () => {
			return colors.every(({ color }) => color !== currentColor);
		});
		ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
			return colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			);
		});
	});

	useEffect(() => {
		// componentWillUnmount
		return () => {
			ValidatorForm.removeValidationRule("isColorUnique");
			ValidatorForm.removeValidationRule("isColorNameUnique");
		};
	}, []);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const updateCurrentColor = (newColor) => {
		setCurrentColor(newColor.hex);
	};

	const addNewColor = () => {
		let newColor = { name: newColorName, color: currentColor };
		setNewColorName("");
		setColors((Colors) => [...Colors, newColor]);
	};

	const handleNewColorChange = (e) => {
		setNewColorName(e.target.value);
	};

	const handlePaletteSave = (newPaletteName, emoji) => {
		const newPalette = {
			paletteName: newPaletteName,
			id: newPaletteName.toLowerCase().replace(/ /g, "-"),
			colors: colors,
			emoji: emoji,
		};
		savePalette(newPalette);
		navigate("/");
	};

	const handleDelete = (colorName) => {
		let nColors = colors.filter((c) => c.name !== colorName);
		setColors(nColors);
	};

	const clearPalette = () => {
		setColors([]);
	};

	const randomColor = () => {
		let allColors = palettes.map((palette) => palette.colors).flat();
		let rand = Math.floor(Math.random() * allColors.length);
		let randomColor = allColors[rand];
		setColors([...colors, randomColor]);
	};

	const showForm = () => {
		setIsFormShowing(true);
	};

	const hideForm = () => {
		setIsFormShowing(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open} color="default">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<AddBoxIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Create a Palette
					</Typography>
				</Toolbar>
				<div className="mr-4">
					<Link to="/">
						<Button
							variant="contained"
							color="secondary"
							sx={{ margin: "0 0.5rem" }}
						>
							Go Back
						</Button>
					</Link>
					<Button
						variant="contained"
						onClick={showForm}
						sx={{ margin: "0 0.5rem" }}
					>
						Save
					</Button>
				</div>
			</AppBar>
			{isFormShowing && (
				<PaletteMetaForm
					handlePaletteSave={handlePaletteSave}
					palettes={palettes}
					hideForm={hideForm}
				/>
			)}
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						display: "flex",
						alignItems: "center",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						<ArrowBackIosNewIcon />
					</IconButton>
				</DrawerHeader>
				<Divider />
				<div className="w-[90%] h-full flex flex-col justify-center items-center">
					<Typography variant="h4" mb={"5rem"}>
						Design Your Palette
					</Typography>
					<div className="w-full">
						<Button
							variant="contained"
							color="error"
							onClick={clearPalette}
							className="w-1/2"
						>
							Clear Palette
						</Button>
						<Button
							variant="contained"
							onClick={randomColor}
							disabled={paletteFull}
							className="w-1/2 "
						>
							{paletteFull ? "Palette Full" : "Random Color"}
						</Button>
					</div>
					<ChromePicker
						color={currentColor}
						onChangeComplete={(color) => updateCurrentColor(color)}
						className="!w-[100%] mt-8"
					/>
					<ValidatorForm className="w-full" onSubmit={addNewColor}>
						<TextValidator
							value={newColorName}
							onChange={handleNewColorChange}
							validators={["required", "isColorNameUnique", "isColorUnique"]}
							errorMessages={[
								"this field is required",
								"Color's name must be unique!",
								"Color already taken!",
							]}
							className="w-full h-[70px]"
							margin="normal"
							label="Color's Name"
							variant="filled"
						/>

						<Button
							type="submit"
							variant="contained"
							sx={{ bgcolor: currentColor }}
							disabled={paletteFull}
							className="w-full p-4 mt-4 !text-[2rem]"
						>
							{paletteFull ? "Palette Full" : "Add Color"}
						</Button>
					</ValidatorForm>
				</div>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<DraggablecolorList colors={colors} handleDelete={handleDelete} />
			</Main>
		</Box>
	);
}
