import React from "react";
// import LoadingPage from "./loadingPage/LoadingPage";
import Alcohol from "../filter/alcohol/Alcohol";
import NonAlcohol from "../filter/alcohol/NonAlcohol";
import PopularCocktail from "../components/PopularCocktail";
import RecentCocktail from "../components/RecentCocktail";

function HomePage() {
	return (
		<div>
			{/* <LoadingPage /> */}
			<div style={{ display: "flex" }}>==Popular==
				<PopularCocktail/>
				<h1 style={{ color: "red" }}>==Recent==</h1>
				<RecentCocktail />
			</div>
		</div>
	);
}

export default HomePage;
