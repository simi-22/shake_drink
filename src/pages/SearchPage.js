import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm"; // 검색창
import SearchButtons from "../components/SearchButtons"; // 카테고리 버튼
import Card from "../components/card/Card"; // 카드 컴포넌트
// hook
import { useSearchCocktailsByName } from "../hooks/useSearchCocktailsByName";

const ContainerSx = styled(Container)(({ theme, paddingTop = 8, paddingBottom = 6 }) => ({
	// pt: 8,
	// pb: 6,
	// paddingTop: theme.spacing(8),
	// paddingBottom: theme.spacing(6),
	paddingTop: theme.spacing(paddingTop), // 기본값은 8
	paddingBottom: theme.spacing(paddingBottom), // 기본값은 6
}));

const SearchPage = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	console.log("## selectedCategory", selectedCategory);
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get("s") || "";
	const { data: cocktailCardData, isLoading, isError, error } = useSearchCocktailsByName(keyword);
	console.log("##cocktailCardData", cocktailCardData);
	const handleSearch = (keyword) => {
		// e.preventDefault();
		setSearchParams({ s: keyword });
	};

	const handleCategoryChange = (category) => {
		console.log("Changing to category:", category);
		setSelectedCategory(category);
		console.log("Current selected category:", selectedCategory);
	};

	const filteredCocktails =
		cocktailCardData &&
		(selectedCategory === "All"
			? cocktailCardData
			: cocktailCardData.filter(
					(cocktail) => cocktail.strCategory.toLowerCase() === selectedCategory.toLowerCase(),
			  ));

	// useEffect(() => {
	// 	if (searchParams.get("s") !== keyword) {
	// 		setKeyword(searchParams.get("s") || "");
	// 	}
	// }, [searchParams, keyword]);

	if (isLoading) return <div>Loading...</div>;
	if (isError) {
		console.error("Error fetching data:", error);
		return <div>An error occurred: {error?.message || "Network or server issue"}</div>;
	}
	if (!cocktailCardData || cocktailCardData.length === 0) {
		return <div>No cocktails found.</div>;
	}
	console.log("Filtered cocktails:", filteredCocktails);

	return (
		<>
			<Box>
				{/* <Typography component="h2" variant="h1">
					검색페이지
				</Typography> */}
				<Box>
					<Container maxWidth="lg">
						<Typography
							component="h2"
							variant="h3"
							sx={{
								display: "flex",
								margin: "32px 0",
								textAlign: "center",
								justifyContent: "center",
								alignItems: "flex-end",
							}}
						>
							Drink
							<Typography
								component="span"
								variant="h2"
								sx={{
									fontWeight: "500",
									color: "#FD4926",
								}}
							>
								Searching
							</Typography>
						</Typography>
					</Container>
				</Box>
				<Box>
					<ContainerSx maxWidth="lg">
						<SearchForm onSearch={handleSearch} />
					</ContainerSx>
				</Box>
				<Box>
					<ContainerSx maxWidth="lg">
						<SearchButtons onCategoryChange={handleCategoryChange} />
					</ContainerSx>
				</Box>

				<Box sx={{ mb: 4 }}>
					<Container maxWidth="lg">
						<Box
							sx={{
								mt: 1,
								//   pb: 4,
								//   pl: 4,
								//   pr: 4,
								display: "flex",
								flexWrap: "wrap",
								gap: 3,
								justifyContent: "space-between",
							}}
						>
							{filteredCocktails.map((cockTailData, index) => (
								<Card key={index} cockTailData={cockTailData} />
							))}
						</Box>
					</Container>
				</Box>
			</Box>
		</>
	);
};

export default SearchPage;
