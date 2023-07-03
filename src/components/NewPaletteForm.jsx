import { ChromePicker } from "@hello-pangea/color-picker";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import DraggableColorBox from "./DraggableColorBox";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		height: "calc(100vh - 64px)",
		padding: theme.spacing(3),
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
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function NewPaletteForm({ palettes, savePalette }) {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const [currentColor, setCurrentColor] = useState("tomato");
	const [colors, setColors] = useState([{ name: "blue", color: "blue" }]);
	const [newColorName, setNewColorName] = useState("");
	const [newPaletteName, setNewPaletteName] = useState("");

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
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			return palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
	});

	useEffect(() => {
		// componentWillUnmount
		return () => {
			ValidatorForm.removeValidationRule("isColorUnique");
			ValidatorForm.removeValidationRule("isColorNameUnique");
			ValidatorForm.removeValidationRule("isPaletteNameUnique");
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

	const handleNewPaletteChange = (e) => {
		setNewPaletteName(e.target.value);
	};

	const handlePaletteSave = () => {
		const newPalette = {
			paletteName: newPaletteName,
			id: newPaletteName.toLowerCase().replace(/ /g, "-"),
			colors: colors,
		};
		savePalette(newPalette);
		navigate("/");
	};

	const handleDelete = (colorName) => {
		let nColors = colors.filter((c) => c.name !== colorName);
		setColors(nColors);
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
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Persistent drawer
					</Typography>

					<ValidatorForm onSubmit={handlePaletteSave}>
						<TextValidator
							label="Palette Name"
							value={newPaletteName}
							onChange={handleNewPaletteChange}
							validators={["required", "isPaletteNameUnique"]}
							errorMessages={[
								"Enter palette name!",
								"Palette's name must be unique!",
							]}
						/>

						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</ValidatorForm>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<Typography variant="h4">Design Your Palette</Typography>
				<div>
					<Button variant="contained" color="secondary">
						Clear Palette
					</Button>
					<Button variant="contained" color="primary">
						Random Color
					</Button>
				</div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={(color) => updateCurrentColor(color)}
				/>
				<ValidatorForm onSubmit={addNewColor}>
					<TextValidator
						value={newColorName}
						onChange={handleNewColorChange}
						validators={["required", "isColorNameUnique", "isColorUnique"]}
						errorMessages={[
							"this field is required",
							"Color's name must be unique!",
							"Color already taken!",
						]}
					/>

					<Button
						type="submit"
						variant="contained"
						sx={{ bgcolor: currentColor }}
					>
						Add Color
					</Button>
				</ValidatorForm>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />

				{colors.map((color) => {
					return (
						<DraggableColorBox
							key={color.name}
							color={color.color}
							name={color.name}
							handleDelete={() => handleDelete(color.name)}
						/>
					);
				})}
			</Main>
		</Box>
	);
}
