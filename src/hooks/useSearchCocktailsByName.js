import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../api/api";

const searchCocktailsByName = (keyword) => {
	return searchApi.get(`/search.php?s=${keyword}`).then((response) => {
		// 검색어가 없거나 데이터가 없는 경우 전체 데이터를 반환
		if (!keyword || !response.data || !response.data.drinks) {
			return response.data;
		}
		// 검색어가 있으면 데이터를 필터링하여 반환
		const filteredData = response.data.drinks.filter((drink) =>
			drink.strDrink.toLowerCase().includes(keyword.toLowerCase()),
		);
		return { drinks: filteredData };
	});
};

export const useSearchCocktailsByName = (keyword) => {
	return useQuery({
		queryKey: ["search-cocktail-by-name", keyword],
		queryFn: () => searchCocktailsByName(keyword),
		// select: (result) => result.data,
		select: (result) => result.drinks || [],
	});
};
