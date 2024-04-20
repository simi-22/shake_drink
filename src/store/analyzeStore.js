import {create} from 'zustand'
// import {produce} from 'immer';

const initialState={
		"Ordinary Drink":0, //A
		"Cocktail":0, //B
		"Shake":0, //C
		"Other / Unknown":0, //D
		"Cocoa":0, //E
		"Shot":0,  //F
		"Coffee / Tea":0, //G
		"Homemade Liqueur":0, //H
		"Punch / Party Drink":0, //I
		"Beer":0,  //J
		"Soft Drink":0, //K
		"firstRatedCategory": 'Cocktail'
}

export const useAnalyze = create((set)=>({
	...initialState,
	updateState: (key) => set((state) => ({ [key]: state[key] + 1 })),
	setFirstRatedCategory: () => set((state) => {
		// 모든 카테고리 중 value최대값 찾기
        const maxCount = Math.max(...Object.values(state)); 
		// 최대값과 일치하는 카테고리 찾기
        const firstRatedCategory2 = Object.keys(state).find(key => state[key] === maxCount); 
        return { firstRatedCategory: firstRatedCategory2 }; // 일등 카테고리 반환
    })
}))