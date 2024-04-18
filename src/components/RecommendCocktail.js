import React from "react";
import Card from "./card/Card";

const RecommendCocktail = ({recommendData}) => {
	return (
		<div>
			{recommendData?.map((cockTailData, index) => (
				<Card cockTailData={cockTailData} key={index} />
			))}
		</div>
	);
};

export default RecommendCocktail;
