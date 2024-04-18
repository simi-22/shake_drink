import React from "react";
import { useDetailCocktail } from "../hooks/useDetailCocktail";
import { useParams } from "react-router-dom";
import { useRecommendCocktail } from "../hooks/useRecommendCocktail";
import RecommendCocktail from "../components/RecommendCocktail";
import { useSearchByIngredient } from "../hooks/useSearchByIngredient";
import DetailCocktail from "../components/DetailCocktail";


const DetailPage = () => {
	const { id } = useParams();
	const { data : detailData } = useDetailCocktail(id);

	const { data: recommendData, isLoading, isError } = useSearchByIngredient(detailData?.strIngredient1);
	console.log("recommendData", recommendData);
	// console.log("detailData", detailData);

	return (
		<div>
			<DetailCocktail detailData={detailData}/>
			<RecommendCocktail recommendData={recommendData} />
		</div>
	);
};

export default DetailPage;
