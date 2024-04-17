import {useQuery} from '@tanstack/react-query'
import {searchApi} from '../api/api'

const searchCocktailsByName =(str)=>{
	return searchApi.get(`search.php?s=${str}`)
}
export const useSearchCocktailsByName=(str)=>{
	return useQuery({
		queryKey:['search-cocktail-by-name', str], 
		queryFn: ()=> searchCocktailsByName(str),
    	select: (result)=> result.data
});
}
