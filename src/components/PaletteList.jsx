import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
	Avatar,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/PaletteList.css";
import MiniPalette from "./MiniPalette";

export default function PaletteList({ palettes, removePalette }) {
	const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
	const [deleteId, setDeleteId] = useState("");

	const openDialog = (id) => {
		setOpenDeleteDialog(true);
		setDeleteId(id);
	};

	const closeDialog = () => {
		setOpenDeleteDialog(false);
		setDeleteId("");
	};

	const handleDelete = () => {
		removePalette(deleteId);
		closeDialog();
	};

	return (
		<div className="palette-list h-screen flex items-start justify-center">
			<div className="container w-1/2 flex items-start flex-wrap flex-col ">
				<nav className="flex justify-between items-center w-full text-white my-4">
					<p className="text-4xl">Palettium</p>
					<Link to="/palette/create" className="text-xl underline mr-3">
						Create Palette
					</Link>
				</nav>

				<TransitionGroup className="palettes">
					{palettes.map((palette) => (
						<CSSTransition key={palette.id} classNames="fade" timeout={300}>
							<MiniPalette
								key={palette.id}
								openDialog={openDialog}
								{...palette}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
			<Dialog open={openDeleteDialog}>
				<DialogTitle>Delete This Palette?</DialogTitle>
				<List>
					<ListItem button onClick={handleDelete}>
						<ListItemAvatar>
							<Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
								<CheckIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Delete" />
					</ListItem>
					<ListItem button onClick={closeDialog}>
						<ListItemAvatar>
							<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
								<CloseIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Cancel" />
					</ListItem>
				</List>
			</Dialog>
		</div>
	);
}
