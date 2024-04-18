/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

function LevelComponent() {
	return (
		<div css={container}>
			<h1>Level 1</h1>

			<div>
				<h3>이 칵테일에 들어가는 2가지 재료</h3>
				<div>A</div>
				<div>B</div>
			</div>
		</div>
	);
}

export default LevelComponent;

const container = css`
	width: 100%;
	height: 100%;
	position: relative;
`;
