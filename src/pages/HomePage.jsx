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
import Slider from "react-slick";
import "../styles/homePage.style.css";
import Slide1 from "../assets/image/cocktail-slide-1.jpg";
import Slide2 from "../assets/image/cocktail-slide-2.jpeg";
import Slide3 from "../assets/image/cocktail-slide-3.jpg";
import Poster1 from "../assets/image/cocktail-poster.png";
import banner1 from "../assets/image/cocktail-banner1.png";
import banner2 from "../assets/image/cocktail-banner2.png";
import banner3 from "../assets/image/cocktail-banner3.png";
import banner4 from "../assets/image/cocktail-banner4.png";
import banner5 from "../assets/image/cocktail-banner5.png";
import PopularList from "./component/PopularList";

function HomePage() {
	let settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		lazyLoad: "anticipated", //페이지 미리로딩
	};
	return (
		<div id="home-page">
			<Slider {...settings} className="home-slide">
				<div>
					<img src={Slide1} alt="메인베너이미지1" />
					<div className="event">
						<p>
							<img src={Poster1} alt="" />
						</p>
						<p>
							<h3>2024 Summer Cocktail Festival</h3>
							<button>신청하기</button>
						</p>
					</div>
				</div>
				<div>
					<img src={Slide2} alt="메인배너이미지2" />
				</div>
				<div>
					<img src={Slide3} alt="메인배너이미지3" />
				</div>
			</Slider>

			{/* <LoadingPage /> */}
			{/* <div style={{ display: "flex" }}>
				<Alcohol />
				<h1 style={{ color: "red" }}>==NonAlcohol==</h1>
				<NonAlcohol />
			</div> */}

			<ul id="home-banner">
				<li>
					<img src={banner1} alt="" />
				</li>
				<li>
					<img src={banner2} alt="" />
				</li>
				<li>
					<img src={banner3} alt="" />
				</li>
				<li>
					<img src={banner4} alt="" />
				</li>
				<li>
					<img src={banner5} alt="" />
				</li>
			</ul>
			<PopularList />
		</div>
	);
}

export default HomePage;
