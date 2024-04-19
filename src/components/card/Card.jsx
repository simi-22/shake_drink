/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import HeartIcon from "../../assets/ic-heart.svg";
import EmptyHeartIcon from "../../assets/ic-emptyHeart.svg";
import { useNavigate } from "react-router-dom";
import { Chip } from "@mui/material";
import { container, contentWrap, imgWrap, labelWrap } from "./Card.style";

// 재료가져오는 함수
function getNonNullIngredients(data) {
	const ingredients = [];
	for (let i = 1; i <= 15; i++) {
		const ingredientKey = `strIngredient${i}`;
		if (data[ingredientKey] !== null && data[ingredientKey] !== "") {
			ingredients.push(`#${data[ingredientKey]}  `);
		}
	}
	return ingredients;
}

function Card({ cockTailData, labelText }) {
	const navigate = useNavigate();
	const { idDrink, strDrink, strAlcoholic, strInstructions, strDrinkThumb } = cockTailData;
	const [like, setLike] = useState(false);
	const [hover, setHover] = useState(false);

	return (
		<li
			css={container}
			onClick={() => {
				navigate(`/${idDrink}`);
			}}
		>
			<div css={imgWrap} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				<img src={strDrinkThumb} alt="cocktail" />
				{hover && (
					<div>
						<div>
							<div>{strAlcoholic === "Alcoholic" ? "#알콜" : "#무알콜"}</div>
							<div>{getNonNullIngredients(cockTailData)}</div>
						</div>
					</div>
				)}
			</div>

			<div css={contentWrap}>
				<div css={labelWrap}>
					<Chip label={labelText} size="small" color="error" variant="outlined" />
					<img
						className="like"
						src={like ? HeartIcon : EmptyHeartIcon}
						alt={like ? "like" : "unlike"}
						onClick={(e) => {
							e.stopPropagation();
							setLike((prev) => !prev);
						}}
					/>
				</div>
				<h1>{strDrink}</h1>
				<p>{strInstructions}</p>
			</div>
		</li>
	);
}

export default Card;
