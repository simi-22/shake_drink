import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { category } from "../constant/list";

const SearchButtons = ({ onCategoryChange }) => {
	const [selected, setSelected] = useState(0);
	console.log("##category", category);
	const buttonStyle = (isSelected) => ({
		backgroundColor: isSelected ? "#FD4926" : "white",
		borderColor: isSelected ? "white" : "lightgray",
		color: isSelected ? "white" : "#FD4926",
		// borderRadius: 50,
		border: `1px solid ${isSelected ? "white" : "#FD4926"}`,
		borderRadius: "8px",
		"&:hover": {
			backgroundColor: "#FD4926",
			borderColor: "white",
			color: "white",
		},
	});

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: 1,
				justifyContent: "center",
			}}
		>
			{category.map((categoryItem, index) => (
				<Button
					key={index}
					variant="outlined"
					onClick={() => {
						setSelected(index);
						onCategoryChange?.(categoryItem);
					}}
					sx={buttonStyle(selected === index)}
				>
					{categoryItem}
				</Button>
			))}
		</Box>
	);
};

export default SearchButtons;
