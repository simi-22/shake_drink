import React from "react";
// import LoadingPage from "./loadingPage/LoadingPage";
import Alcohol from "../filter/alcohol/Alcohol";
import NonAlcohol from "../filter/alcohol/NonAlcohol";
import PopularCocktail from "../components/PopularCocktail";
import RecentCocktail from "../components/RecentCocktail";
// import Alcohol from "../filter/alcohol/Alcohol";
// import NonAlcohol from "../filter/alcohol/NonAlcohol";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/homePage.style.css";

import banner1 from "../assets/image/cocktail-banner1.png";
import banner2 from "../assets/image/cocktail-banner2.png";
import banner3 from "../assets/image/cocktail-banner3.png";
import banner4 from "../assets/image/cocktail-banner4.png";
import banner5 from "../assets/image/cocktail-banner5.png";

import PopularList from "../components/mainList/PopularList";
import LatestList from "../components/mainList/LatestList";
import MainSlider from "../components/Slider/MainSlider";

import midBanner from "../assets/image/jazzbanner.png";

function HomePage() {
	return (
		<div id="home-page">
			<MainSlider />
			<ul id="home-banner">
				<li>
					<img src={banner1} alt="배너1" />
				</li>
				<li>
					<img src={banner2} alt="배너2" />
				</li>
				<li>
					<img src={banner3} alt="배너3" />
				</li>
				<li>
					<img src={banner4} alt="배너4" />
				</li>
				<li>
					<img src={banner5} alt="배너5" />
				</li>
			</ul>

			<PopularList />

			<div id="middle-banner">
				<img src={midBanner} alt="재즈페스티벌" />
			</div>

			<LatestList />

			<ul id="main-grid">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
}

export default HomePage;
