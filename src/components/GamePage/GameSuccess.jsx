/** @jsxImportSource @emotion/react */
import Lottie from "lottie-react";
import React from "react";
import ConguratulationLottie from "../../assets/lottie-congratulation.json";
import { css } from "@emotion/react";
function GameSuccess({ levelName }) {
	return (
		<div css={container}>
			<h1>{levelName}</h1>
			<Lottie animationData={ConguratulationLottie} loop={false} />
		</div>
	);
}

export default GameSuccess;

const container = css`
	width: 100%;
	height: 100%;
	position: relative;
	& > div {
		position: absolute;
		top: 0;
		z-index: -1;
	}
	& > h1 {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
