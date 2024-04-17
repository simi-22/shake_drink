import {create} from 'zustand'

export const useCart = create((set)=>({
	cartList: [],
	addToCart: (item) => set((state) =>({cartList : [...state.cartList, item]})),
	addListToCart:(list)=> set((state)=>({cartList: [...state.cartList, ...list]})),
	removeFromCart: (id) => set((state) => {
        const updatedList = state.cartList?.filter(item => item.id !== id);
        return { cartList: updatedList };
    }),
	addCount:(id) => set((state)=>{
		const updatedList = state.cartList?.map(item => {
			if (item.id === id) {
				return {
					...item,
					count: item.count + 1
				};
			}
			return item;
		});
		return { cartList: updatedList };
	}),
	minusCount:(id) => set((state)=>{
		const updatedList = state.cartList?.map(item => {
			if (item.id === id) {
				return {
					...item,
					count: item.count - 1
				};
			}
			return item;
		});
		return { cartList: updatedList };
	}),

	emptyCartList:()=>set((state)=>({cartList:[]}))

}))