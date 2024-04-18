import { Box, Grid, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

function SelectList({ data, selected, setSelected }) {
	return (
		<Box>
			<Grid container spacing={2}>
				{data?.drinks.slice(0, 6).map((item, index) => (
					<Grid item xs={6} key={index}>
						<ListItem>
							<ListItemButton
								sx={{ backgroundColor: selected[index] === 1 && "black" }}
								onClick={() => {
									let newSelected = [...selected];
									newSelected[index] = 1;
									setSelected(newSelected);
								}}
							>
								<ListItemText primary={item.strDrink} />
							</ListItemButton>
						</ListItem>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default SelectList;
