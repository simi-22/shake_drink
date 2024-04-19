/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import HeartIcon from "../../assets/ic-heart.svg";
import EmptyHeartIcon from "../../assets/ic-emptyHeart.svg";
import { useNavigate } from "react-router-dom";
import { useFavorite } from "../../store/favoriteStore";

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
	const {addItem} = useFavorite()
	const [like, setLike] = useState(false);
	const [hover, setHover] = useState(false);
	const navigate = useNavigate();
	const navigateToDetailPage = () => {
		console.log("clickToDetail");
		navigate(`/${idDrink}`);
	};
	console.log('cockTailData :', cockTailData)

	return (
		<li css={container} onClick={navigateToDetailPage}>
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
				<img
					className="like"
					src={like ? HeartIcon : EmptyHeartIcon}
					alt={like ? "like" : "unlike"}
					onClick={() => {
						setLike((prev) => !prev);
						addItem(cockTailData)
					}}
				/>
			</div>

			<div css={contentWrap}>
				{/* 여기 Best부분 Best일때는 Popular일땐 Best가 latest일땐 New가 뜨게 할 수 있나요?*/}
				<span>Best</span>
				<h1>{strDrink}</h1>
				<p>{strInstructions}</p>
			</div>
		</li>
	);
}

export default Card;

const container = css`
	position: relative;
	background-color: #fff;
	box-sizing: border-box;
	width: 20rem;
	text-align: center;
	margin: 0 auto;
	cursor: pointer;
	@media (max-width: 1080px) {
		width: 15rem;
	}
	@media (max-width: 800px) {
		width: 12rem;
	}
	@media (max-width: 610px) {
		width: 9rem;
	}
	@media (max-width: 490px) {
		width: 11em;
	}
	@media (max-width: 400px) {
		width: 7em;
	}
`;

const imgWrap = css`
	width: 100%;
	& > img:nth-of-type(1) {
		filter: brightness(150%);
		filter: contrast(80%);
		filter: saturate(120%);
	}
	& > div {
		background-color: rgb(255, 255, 255, 0.8);
		width: 100%;
		height: 320px;
		color: black;
		position: absolute;
		padding: 20px;
		box-sizing: border-box;
		top: 0;
		& > div {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
	}
	.like {
		position: absolute;
		bottom: 45px;
		right: 10px;
	}
`;

const contentWrap = css`
	width: 100%;
	margin-top: 10px;
	& > span {
		padding: 2px 2px;
		background: #ccc;
		color: #fff;
		font-size: 12px;
	}
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
