import React, { useState } from "react";
import Card from "../card/Card";
import { usePopularCocktail } from "../../hooks/usePopularCocktail";

const PopularList = () => {
	const [autoHeight, setAutoHeight] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { data, isLoading, isError, error } = usePopularCocktail();
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (isError) {
		console.log(error.message);
	}

	const handleButtonClick = () => {
		setAutoHeight(!autoHeight);
		setIsOpen(!isOpen);

		if (isOpen) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<div id="popular-list" className="main-page-list">
			<div>
				<h2>Best Cocktail</h2>
				<ul style={{ height: autoHeight ? "auto" : "1280px", overflow: "hidden" }}>
					{data?.drinks.map((cockTailData, index) => (
						<Card cockTailData={cockTailData} key={index} />
					))}
				</ul>
			</div>
			<div className="popular-button">
				<button onClick={handleButtonClick}>{isOpen ? "닫기" : "더보기"}</button>
			</div>
		</div>
	);
};

export default PopularList;
