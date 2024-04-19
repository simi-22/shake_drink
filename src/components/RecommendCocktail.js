import React from "react";
import RecommendCard from "./card/RecommendCard";

const RecommendCocktail = ({ searchByIngredientData, base }) => {
	return (
		<div>
			{searchByIngredientData?.map((recommendData) => (
				<RecommendCard cockTailData={recommendData} key={recommendData.idDrink} base={base} />
			))}
		</div>
	);
};

export default RecommendCocktail;
