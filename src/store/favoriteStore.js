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
	totalPrice: 0,
	setTotalPrice:(val)=>set((state)=>({totalPrice: val})),
	calculate:()=> set((state)=>{
		let result =0;
		for(let i=0; i<state.favoriteList.length; i++){
			result += state.favoriteList[i].price * state.favoriteList[i].count
		}
		return result
	}),
	addItem: (item) => set((state) => {
        const updatedList = [...state.favoriteList, item];
        const result = state.calculate(updatedList);
        return { favoriteList: updatedList, totalPrice: result };
    }),
	removeItem: (id) => set((state) => {
        const updatedList = state.favoriteList.filter(item => item.id !== id);
        const result = state.calculate(updatedList);
        return { favoriteList: updatedList, totalPrice: result };
    }),
	addCount:(id) => set((state)=>{
		const updatedList = state.favoriteList.map(item => {
			if (item.id === id) {
				return {
					...item,
					count: item.count + 1
				};
			}
			return item;
		});
		return { favoriteList: updatedList };
	}),
	minusCount:(id) => set((state)=>{
		const updatedList = state.favoriteList.map(item => {
			if (item.id === id) {
				return {
					...item,
					count: item.count - 1
				};
			}
			return item;
		});
		return { favoriteList: updatedList };
	}),

	emptyFavoriteList:()=>set((state)=>({favoriteList:[]}))

}))