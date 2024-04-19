import React from "react";
import { useDetailCocktail } from "../hooks/useDetailCocktail";
import { useParams } from "react-router-dom";
import { useRecommendCocktail } from "../hooks/useRecommendCocktail";
import RecommendCocktail from "../components/RecommendCocktail";

const DetailPage = () => {
	const { id } = useParams();
	const { data } = useDetailCocktail(id);
	console.log('data',data)
	const { data: recommendData, isLoading, isError } = useRecommendCocktail(data?.strIngredient1);

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	// if (isError) {
	// 	return <div>Error fetching data</div>;
	// }

	console.log("recommendData", recommendData);

	console.log("data", data);

	return (
		<div>
			<div>칵테일 : {data?.strDrink}</div>
			<div>
				<img src={data?.strDrinkThumb} />
			</div>
			<div>
				{data?.ingredients.map((item, index) => (
					<h1>
						재료{index + 1} {item.ingredient} :{item.measure}
					</h1>
				))}
			</div>
			<div>레시피 : {data?.strInstructions}</div>
			<div>컵 : {data?.strGlass}</div>
			<RecommendCocktail recommendData={recommendData}/>
		</div>
	);
};

export default DetailPage;
