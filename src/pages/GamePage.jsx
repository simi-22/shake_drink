import React, { useEffect, useState } from "react";
import { useRandomCocktail } from "../hooks/useRandomCocktail";
import { Box, Container } from "@mui/material";
import SelectList from "../components/GamePage/SelectList";
import GameTitle from "../components/GamePage/GameTitle";
import LevelComponent from "../components/GamePage/LevelComponent";

function GamePage() {
	const { data, isLoading, isError } = useRandomCocktail();
	const [selected, setSelected] = useState([0, 0, 0, 0, 0, 0]);
	const [level, setLevel] = useState(0);
	const [correctNumber, setCorrectNumber] = useState(null);

	useEffect(() => {
		setCorrectNumber(Math.floor(Math.random() * 5));
	}, []);

	useEffect(() => {
		if (selected[correctNumber] === 1) {
			setLevel(5);
		}
	}, [selected]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error fetching data</div>;
	}

	return (
		<Container maxWidth="sm" sx={{ mt: "30px" }}>
			<Box sx={{ width: "100%", height: "500px", mb: "30px" }}>
				{level === 0 && (
					<GameTitle
						onNext={() => {
							setLevel(1);
						}}
					/>
				)}
				{level === 1 && <LevelComponent />}
				{level === 5 && <div>성공했어!</div>}
			</Box>
			<SelectList data={data} selected={selected} setSelected={setSelected} />
		</Container>
	);
}

export default GamePage;
