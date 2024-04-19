import React from "react";
import { useDetailCocktail } from "../hooks/useDetailCocktail";
import { useParams } from "react-router-dom";
import RecommendCocktail from "../components/RecommendCocktail";
import { useSearchByIngredient } from "../hooks/useSearchByIngredient";
import DetailCocktail from "../components/DetailCocktail";
import LoadingPage from "./loadingPage/LoadingPage";
import "../styles/detailPage.style.css";

const DetailPage = () => {
	const { id } = useParams();
	const { data: detailData, isLoading: detailLoading } = useDetailCocktail(id);

	const {
		data: searchByIngredientData,
		isLoading,
		isError,
	} = useSearchByIngredient(detailData?.strIngredient1, id);
	const base = detailData?.strIngredient1;
	console.log("searchByIngredientData", searchByIngredientData);

	return (
		<div id="detail-page">
			{/* 로딩 페이지를 먼저 보여주고, detailLoading과 isLoading이 모두 false인 경우에만 컴포넌트를 보여줌 */}
			{detailLoading || isLoading ? (
				<LoadingPage />
			) : (
				<div>
					<DetailCocktail detailData={detailData} />
					<RecommendCocktail searchByIngredientData={searchByIngredientData} base={base} />
				</div>
			)}
		</div>
	);
};

export default DetailPage;
