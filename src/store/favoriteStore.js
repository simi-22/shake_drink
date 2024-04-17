import {create} from 'zustand'

export const useFavorite = create((set)=>({
	favoriteList: [
		{
			id: "11007",
			drink:"Margarita",
			image:'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
			price:15000,
			isNew:'New',
			isSale:'Sale',
			count:1,
		},
		{
			id: "11118",
			drink:"Blue Margarita",
			image:'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
			price:10000,
			isNew:'',
			isSale:'',
			count:1,
		}
	],
	setPrice:(id, val)=> set((state)=>{
		const updatedList = state.favoriteList.map((item)=>{
			if(item.id === id){
				return {
					...item,
					price: val
				};
			}
			return item;
		});
		return {favoriteList: updatedList};
	}),
	setIsNew:(id, val)=> set((state)=>{
		const updatedList = state.favoriteList.map((item)=>{
			if(item.id === id){
				return {
					...item,
					isNew: val
				};
			}
			return item;
		});
		return {favoriteList: updatedList};
	}),
	setIsSale:(id, val)=> set((state)=>{
		const updatedList = state.favoriteList.map((item)=>{
			if(item.id === id){
				return {
					...item,
					isSale: val
				};
			}
			return item;
		});
		return {favoriteList: updatedList};
	}),
	
	addItem: (item) => set((state) => {
        const updatedList = [...state.favoriteList, item];
        return { favoriteList: updatedList};
    }),
	removeItem: (id) => set((state) => {
        const updatedList = state.favoriteList.filter(item => item.id !== id);
        return { favoriteList: updatedList};
    }),

	emptyFavoriteList:()=>set((state)=>({favoriteList:[]}))

}))