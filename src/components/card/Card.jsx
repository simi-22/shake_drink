/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import HeartIcon from "../../assets/ic-heart.svg";
import EmptyHeartIcon from "../../assets/ic-emptyHeart.svg";

function Card({ cockTailData }) {
	const { strDrink, strAlcoholic, strInstructions, strDrinkThumb } = cockTailData;
	const [like, setLike] = useState(false);

	return (
		<div css={container}>
			<div>
				<img src={strDrinkThumb} alt="cocktail" />
				{like ? (
					<img
						className="like"
						src={HeartIcon}
						alt="like"
						onClick={() => {
							setLike((prev) => !prev);
						}}
					/>
				) : (
					<img
						className="like"
						src={EmptyHeartIcon}
						alt="unlike"
						onClick={() => {
							setLike((prev) => !prev);
						}}
					/>
				)}
			</div>

			<div css={wrap}>
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
	& > :nth-child(1) {
		width: 180px;
		height: 180px;
		& :nth-child(1) {
			border-radius: 15px;
		}
	}

	.like {
		position: absolute;
		right: 17px;
		top: 160px;
		cursor: pointer;
	}
`;

const wrap = css`
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
