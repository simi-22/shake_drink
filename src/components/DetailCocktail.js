import React, { useRef } from "react";
import midBanner from "../assets/image/jazzbanner.png";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ingredientCocktail from "../assets/image/ingredient-cocktail.jpg";
import receiptCocktail2 from "../assets/image/receipt-cocktail2.jpg";
const DetailCocktail = ({ detailData }) => {
	console.log("detailData", detailData);
	const inputForm1 = useRef();
	const inputForm2 = useRef();
	const onMoveToForm1 = () => {
		inputForm1.current.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	const onMoveToForm2 = () => {
		inputForm2.current.scrollIntoView({ behavior: "smooth", block: "start" });
	};
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
					<div>
						<Button variant="contained" onClick={onMoveToForm1} endIcon={<SendIcon />}>
							ingredient
						</Button>
					</div>

					<div>
						<Button
							variant="contained"
							onClick={onMoveToForm2}
							endIcon={<SendIcon />}
							color="error"
						>
							receipt
						</Button>
					</div>
					<FormGroup>
						<FormControlLabel control={<Switch defaultChecked />} label="한글 번역" />
					</FormGroup>

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

			<Paper elevation={12} className="ingredient-paper" ref={inputForm1}>
				<div className="explanation-paper-img-container">
					<img src={ingredientCocktail} className="ingredient-paper-img" />
					<h3>재료 정보</h3>
					{detailData?.ingredients.map((item) => (
						<div className="ingredient-div" key={item.id}>
							<div className="item-ingredient">{item.ingredient}</div>
							<div className="item-measure">{item.measure}</div>
						</div>
					))}
				</div>
			</Paper>

			<div id="middle-banner">
				<img src={midBanner} alt="재즈페스티벌" />
			</div>
			<Paper elevation={12} className="explanation-paper" ref={inputForm2}>
				<div className="explanation-paper-img-container">
					<img src={receiptCocktail2} className="explanation-paper-img" />
					<div className="explanation-div">{detailData?.strInstructions}</div>
				</div>
			</Paper>
		</div>
	);
};

export default DetailCocktail;
