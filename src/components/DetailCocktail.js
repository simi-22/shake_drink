import React from "react";
import midBanner from "../assets/image/jazzbanner.png";
import { Grid, Typography } from "@mui/material";

const DetailCocktail = ({ detailData }) => {
	console.log("detailData", detailData);
	return (
		<div>
			<Grid container className="detail-information-container" spacing={2}>
				<Grid item xs={12} sm={6}>
					<img src={detailData?.strDrinkThumb} alt="cocktail" className="cocktail-image" />
				</Grid>
				<Grid item xs={12} sm={6} className="detail-content">
					<div className="badgeWrap">
						<span>{detailData?.strAlcoholic === "Alcoholic" ? "#알콜" : "#무알콜"}</span>
						<span>#재료 {detailData?.ingredients.length}개</span>
					</div>

					<div>
						<span className="title">한글칵테일</span>
						<span className="secondTitle">{detailData?.strDrink}</span>
					</div>

					<div className="detailcontent">{detailData?.strInstructions}</div>

					{/* <div variant="body1">Cup : {detailData?.strGlass}</div>
					<div>
						{detailData?.ingredients.map((item, index) => (
							<div key={index} variant="h6">
								재료{index + 1} {item.ingredient} : {item.measure}
							</div>
						))}
					</div>
					<button className="translation">번역</button> */}
				</Grid>
			</Grid>
			<div id="middle-banner">
				<img src={midBanner} alt="재즈페스티벌" />
			</div>
			<Typography variant="body1" style={{ marginTop: "20px" }}>
				레시피 : {detailData?.strInstructions}
			</Typography>
		</div>
	);
};

export default DetailCocktail;
