import React from "react";
import Card from "../card/Card";
import { usePopularCocktail } from "../../hooks/usePopularCocktail";

const PopularList = () => {
	const { data, isLoading, isError, error } = usePopularCocktail();
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (isError) {
		console.log(error.message);
	}

	return (
		<div id="popular-list" className="main-page-list">
			<div>
				<h2>Best Cocktail</h2>
				<ul className="main-card-wrap">
					{data?.drinks.map((cockTailData, index) => (
						<Card cockTailData={cockTailData} key={index} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default PopularList;
