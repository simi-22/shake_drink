import React, { useRef } from "react";
import midBanner from "../assets/image/jazzbanner.png";
import { Container, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ingredientCocktail from "../assets/image/ingredient-cocktail.jpg";
import receiptCocktail2 from "../assets/image/receipt-cocktail2.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import LocalBarRoundedIcon from "@mui/icons-material/LocalBarRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import Video from "./Video/Video";
import coc1 from "../assets/cocktail1.png";
import coc2 from "../assets/cocktail2.png";
import coc3 from "../assets/cocktail3.png";
import coc4 from "../assets/cocktail4.png";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90%", // 너비를 화면 너비의 80%로 설정
	height: "80%", // 높이를 자동으로 조정하여 내용에 맞게 설정

	bgcolor: "background.paper",
	// border: "2px solid #000",
	boxShadow: 24,
	// p: 10,
};

const DetailCocktail = ({ detailData }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	console.log("detailData", detailData);
	const tags = detailData.strTags ? detailData.strTags.split(",") : null;
	console.log(tags);
	const inputForm1 = useRef();
	const inputForm2 = useRef();
	const onMoveToForm1 = () => {
		inputForm1.current.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	const onMoveToForm2 = () => {
		inputForm2.current.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	let customImg = "cocktail1"; // 기본 이미지

	if (detailData && detailData.strImageSource !== null && !isNaN(detailData.strImageSource)) {
		customImg = `cocktail${detailData.strImageSource + 1}`;
	}
	let myImg = "";
	if (detailData && detailData.strImageSource !== null && isNaN(detailData.strImageSource)) {
		myImg = detailData.strImageSource;
	}

	console.log("customImg", customImg);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Video strVideo={detailData.strVideo ? detailData.strVideo : null} />
					{/* <Typography id="modal-modal-title" variant="h6" component="h2"></Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography> */}
				</Box>
			</Modal>
			<Grid container className="detail-information-container" spacing={2}>
				<Grid item xs={12} sm={6}>
					{/* <div id="middle-banner">
				<img src={midBanner} alt="재즈페스티벌" />
			</div> */}
					<div className="cocktail-image-wrap">
						{detailData && detailData.strDrinkThumb ? (
							<img src={detailData?.strDrinkThumb} alt="cocktail" className="cocktail-image" />
						) : !isNaN(detailData.strImageSource) ? (
							<img
								src={require(`../assets/${customImg}.png`)}
								alt="cocktail"
								className="cocktail-image"
							/>
						) : (
							<img src={myImg} alt="cocktail" className="cocktail-image" />
						)}
					</div>
				</Grid>
				<Grid item xs={12} sm={6}>
					<div className="detail-content">
						<div className="badgeWrap">
							<span>{detailData?.strAlcoholic === "Alcoholic" ? "#알콜" : "#무알콜"}</span>
							<span>#재료 {detailData?.ingredients.length}개</span>
						</div>

						<div>
							<span className="title">{detailData?.strDrink}</span>
							{/* <span className="secondTitle">한글칵테일</span> */}
						</div>
						<div className="str-glass">Cup : {detailData?.strGlass}</div>
						<div className="buttonWrap">
							<div>
								<Button
									variant="contained"
									onClick={onMoveToForm1}
									endIcon={<LocalBarRoundedIcon />}
									className="ingredient-btn"
									color="warning"
								>
									ingredient
								</Button>
							</div>
							<div>
								<Button
									variant="contained"
									onClick={onMoveToForm2}
									endIcon={<ChecklistRtlIcon />}
									color="warning"
									className="recipe-btn"
								>
									recipe
								</Button>
							</div>
						</div>
						<div className="button-tag-wrap">
							<div>
								{detailData.strVideo ? (
									<Button
										onClick={handleOpen}
										variant="contained"
										className="youtube-btn"
										endIcon={<SubscriptionsRoundedIcon />}
										color="error"
									>
										Youtube recipe
									</Button>
								) : (
									<Button
										variant="contained"
										disabled
										endIcon={<SubscriptionsRoundedIcon />}
										className="disabled-btn"
									>
										No recipe
									</Button>
								)}
							</div>
							<div className="tags">
								{tags?.map((tag) => (
									<div className="tag">{`#${tag}`}</div>
								))}
							</div>
						</div>

						{/* <FormGroup>
							<FormControlLabel control={<Switch defaultChecked />} label="한글 번역" />
						</FormGroup> */}
					</div>
				</Grid>
			</Grid>
			<Paper elevation={12} className="ingredient-paper" ref={inputForm1}>
				<div className="explanation-paper-img-container">
					<img src={ingredientCocktail} className="ingredient-paper-img" />
					<div id="ingredient-container">
						<h1 class="style-1">Ingredient</h1>
					</div>
					<div className="ingredient-list">
						{detailData?.ingredients.map((item) => (
							<div className="ingredient-row" key={item.id}>
								<div className="item-ingredient">{item.ingredient}</div>
								<div className="item-measure">{item.measure}</div>
							</div>
						))}
					</div>
				</div>
			</Paper>

			{/* <div id="middle-banner">
				<img src={midBanner} alt="재즈페스티벌" />
			</div> */}
			<Paper elevation={12} className="explanation-paper" ref={inputForm2}>
				<div className="explanation-paper-img-container">
					<img src={receiptCocktail2} className="explanation-paper-img" />
					<div className="recipe-container">
						<h1 class="style-1">Recipe</h1>
					</div>
					<div className="explanation-div">{detailData?.strInstructions}</div>
				</div>
			</Paper>
		</div>
	);
};

export default DetailCocktail;
