/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import HeartIcon from "../../assets/ic-heart.svg";
import EmptyHeartIcon from "../../assets/ic-emptyHeart.svg";
import { useNavigate } from "react-router-dom";

// 재료가져오는 함수
function getNonNullIngredients(data) {
	const ingredients = [];
	for (let i = 1; i <= 15; i++) {
		const ingredientKey = `strIngredient${i}`;
		if (data[ingredientKey] !== null) {
			ingredients.push(`#${data[ingredientKey]}  `);
		}
	}
	return ingredients;
}

function Card({ cockTailData }) {
	
	const { idDrink, strDrink, strAlcoholic, strInstructions, strDrinkThumb } = cockTailData;
	const [like, setLike] = useState(false);
	const [hover, setHover] = useState(false);
	const navigate = useNavigate();
	const navigateToDetailPage = () => {
		console.log("clickToDetail")
		navigate(`/${idDrink}`);
	};

	return (
		<div css={container} onClick={navigateToDetailPage}>
			<div css={imgWrap} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				<img src={strDrinkThumb} alt="cocktail" />
				{hover && (
					<div>
						<div>
							<div>{strAlcoholic === "Alcoholic" ? "#알콜" : "#무알콜"}</div>
							<div>{getNonNullIngredients(cockTailData)}</div>
						</div>
						<img
							className="like"
							src={like ? EmptyHeartIcon : HeartIcon}
							alt={like ? "like" : "unlike"}
							onClick={() => {
								setLike((prev) => !prev);
							}}
						/>
					</div>
				)}
			</div>

			<div css={contentWrap}>
				<h1>{strDrink}</h1>
				<p>{strInstructions}</p>
			</div>
		</div>
	);
}

export default Card;

const container = css`
	position: relative;
	width: 200px;
	height: 250px;
	padding: 10px;
	border-radius: 15px;
	background-color: gray;
`;

const imgWrap = css`
	width: 100%;
	height: 180px;
	position: relative;
	cursor: pointer;
	& > img {
		border-radius: 15px;
	}
	& > div {
		background-color: rgb(0, 0, 0, 0.5);
		border-radius: 15px;
		width: 180px;
		height: 180px;
		padding: 10px;
		color: white;
		position: absolute;
		top: 0;
		& > div {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
	}
	.like {
		position: absolute;
		bottom: 10px;
		right: 10px;
	}
`;

const contentWrap = css`
	width: 100%;
	margin-top: 10px;
	& > h1 {
		font-weight: 700;
	}
	& > p {
		font-size: 10px;
		font-weight: 300;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;
