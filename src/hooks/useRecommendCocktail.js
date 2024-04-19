import { useQuery } from "@tanstack/react-query";
import { randomSelectionCocktailApi } from "../api/api";

const fetchRecommendCocktail = async (base) => {
    const filteredCocktails = [];

    // 필터링된 칵테일이 4개 미만인 경우에만 추가 데이터를 가져오도록 수정
    while (filteredCocktails.length < 4) {
        // API로부터 랜덤 칵테일 목록 가져오기
        const response = await randomSelectionCocktailApi.get();
        const cocktails = response.data.drinks;

        // 추가 데이터를 반복하며 필터링
        for (const cocktail of cocktails) {
            if (cocktail.strIngredient1 === base) {
                filteredCocktails.push(cocktail);
            }
            // 만약 4개 이상의 칵테일을 찾았다면 종료
            if (filteredCocktails.length >= 4) {
                break;
            }
        }
    }

    return filteredCocktails;
};

export const useRecommendCocktail = (base) => {
    return useQuery({
        queryKey: ["cocktail-recommend" ,base],
        queryFn: () => fetchRecommendCocktail(base),
    });
};