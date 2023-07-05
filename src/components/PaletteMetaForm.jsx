import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

export default function PaletteMetaForm({
	handlePaletteSave,
	palettes,
	hideForm,
}) {
	useEffect(() => {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			return palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
	});

	useEffect(() => {
		return () => {
			ValidatorForm.removeValidationRule("isPaletteNameUnique");
		};
	});

	const [stage, setStage] = useState("form");
	const [newPaletteName, setNewPaletteName] = useState("");

	const handleNewPaletteChange = (e) => {
		setNewPaletteName(e.target.value);
	};

	// const handleClickOpen = () => {
	// 	setOpen(true);
	// };

	const handleClose = () => {
		hideForm();
	};

	const ShowEmojiPicker = () => {
		setStage("emoji");
	};

	const savePalette = (emo) => {
		const emoji = emo.native;
		handlePaletteSave(newPaletteName, emoji);
		setStage("");
	};

	return (
		<div>
			<Dialog open={stage === "emoji"}>
				<Picker data={data} onEmojiSelect={savePalette} theme="light" />
			</Dialog>
			<Dialog open={stage === "form"} onClose={handleClose}>
				<DialogTitle>Choose a Palette Name</DialogTitle>
				<ValidatorForm onSubmit={ShowEmojiPicker}>
					<DialogContent>
						<DialogContentText>
							Please choose a name for your palette.. Make sure it is unique..
						</DialogContentText>

						<TextValidator
							label="Palette Name"
							fullWidth
							margin="normal"
							variant="filled"
							color="secondary"
							value={newPaletteName}
							onChange={handleNewPaletteChange}
							validators={["required", "isPaletteNameUnique"]}
							errorMessages={[
								"Enter palette name!",
								"Palette's name must be unique!",
							]}
						/>
					</DialogContent>
					<DialogActions className="mr-4 mb-4">
						<Button onClick={handleClose} color="error">
							Cancel
						</Button>
						<Button variant="outlined" color="secondary" type="submit">
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</div>
	);
}
