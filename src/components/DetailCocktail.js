import React from "react";
import midBanner from "../assets/image/jazzbanner.png";
import { Grid, Typography, Box } from "@mui/material";
import Paper from "@mui/material/Paper";

const DetailCocktail = ({ detailData }) => {
	console.log("detailData", detailData);
	return (
		<div>
			<Grid container className="detail-information-container">
				<Grid item xs={12} sm={6}>
					<img src={detailData?.strDrinkThumb} alt="cocktail" className="cocktail-image" />
				</Grid>
				<Grid item xs={12} sm={6} className="info-container">
					<Typography
						variant="h6"
						className={detailData?.strAlcoholic === "Alcoholic" ? "alcoholic" : "non-alcoholic"}
					>
						{detailData?.strAlcoholic === "Alcoholic" ? "#알콜" : "#무알콜"}
					</Typography>
					<Typography className="alcoholic" variant="h6">
						#재료 {detailData?.ingredients.length}개
					</Typography>
					<Typography variant="body1">Cocktail : {detailData?.strDrink}</Typography>
					<Typography variant="body1">Cup : {detailData?.strGlass}</Typography>
					<div>
						{detailData?.ingredients.map((item, index) => (
							<Typography key={index} variant="h6">
								재료{index + 1} {item.ingredient} : {item.measure}
							</Typography>
						))}
					</div>
					<button className="translation">번역</button>
				</Grid>
			</Grid>
			<div id="middle-banner">
				<img src={midBanner} alt="재즈페스티벌" />
			</div>
			<Paper>레시피 : {detailData?.strInstructions}</Paper>
		</div>
	);
};

export default DetailCocktail;
