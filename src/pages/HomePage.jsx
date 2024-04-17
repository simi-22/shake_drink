import React from "react";
import LoadingPage from "./loadingPage/LoadingPage";
import Alcohol from '../filter/alcohol/Alcohol';
import NonAlcohol from '../filter/alcohol/NonAlcohol';

function HomePage() {
	return (
		<div>
			<LoadingPage />
			<div style={{display:'flex'}}>
				<Alcohol />
				<h1 style={{color:'red'}}>==NonAlcohol==</h1>
				<NonAlcohol />
			</div>

		</div>
	);
}

export default HomePage;
