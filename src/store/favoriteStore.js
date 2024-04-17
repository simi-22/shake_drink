import {create} from 'zustand'

export const useFavorite = create((set)=>({
	favoriteList: [
		{
			id: "11007",
			drink:"Margarita",
			image:'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
			price:15000,
			isNew:'New',
			isSale:'Sale'
		},
		{
			id: "11118",
			drink:"Blue Margarita",
			image:'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
			price:10000,
			isNew:'',
			isSale:''
		}
	],
	addItem:(item) => set((state)=> ({favoriteList: [...state.favoriteList, item]})),
	removeItem:(id) => set((state)=> ({favoriteList: state.favoriteList.filter(item => item.id !==id)})),
	emptyFavoriteList:()=>set((state)=>({favoriteList:[]}))

}))