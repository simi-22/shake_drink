import React, { useRef } from "react";
import middleBanner from "../assets/image/jazzbanner.png";
import { Grid } from "@mui/material";
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

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const DetailCocktail = ({ detailData }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2"></Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
				</Box>
			</Modal>
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
					<div>
						<Button onClick={handleOpen} variant="out-lined">
							Youtube receipt
						</Button>
					</div>

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

					<div className="ingredient-list">
						<h3>재료 정보</h3>
						{detailData?.ingredients.map((item) => (
							<div className="ingredient-row" key={item.id}>
								<div className="item-ingredient">{item.ingredient}</div>
								<div className="item-measure">{item.measure}</div>
							</div>
						))}
					</div>
				</div>
			</Paper>

			<div id="middle-banner">
				<img src={middleBanner} alt="재즈페스티벌" />
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
