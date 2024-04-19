import {create} from 'zustand'
import {v4} from 'uuid';

export const useBookmark = create((set)=>({
	bookmarkList:[
		{ 
			id:'1',
			title:'Margarita',
			url:'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'
		},
		{ 
			id:'2',
			title:'Manhattan',
			url:'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11008'
		},
	],
	addBookmark:(item)=> set((state)=>{
		const newItem ={
			id: v4(),
			title: item.strDrink,
			url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item.id}`
		}
		return {
			bookmarkList: [
				...state.bookmarkList, newItem]
			};
	})
}))