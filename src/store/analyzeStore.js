import {create} from 'zustand'
// import {produce} from 'immer';

const initialState={
		ordinaryDrink:0, //A
		cocktail:0, //B
		shake:0, //C
		otherUnknown:0, //D
		cocoa:0, //E
		shot:0,  //F
		coffeeTea:0, //G
		homemadeLiqueur:0, //H
		punch:0, //I
		beer:0,  //J
		softDrink:0, //K
		firstRatedCategory: null
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
	// import {useAnalyze} from '../store/analyzeStore'
	// const {firstRatedCategory} = useAnalyze()
	// const targetCategory = firstRatedCategory;
	// 카테고리별 검색 api이용.

	

	// updateA:() => set((state)=> ({ordinaryDrink: state.ordinaryDrink +1 })),
	// updateB:() => set((state)=> ({cocktail: state.cocktail +1 })),
	// updateC:() => set((state)=> ({shake: state.shake +1 })),
	// updateD:() => set((state)=> ({otherUnknown: state.otherUnknown +1 })),
	// updateE:() => set((state)=> ({cocoa: state.cocoa +1 })),
	// updateF:() => set((state)=> ({shot: state.shot +1 })),
	// updateG:() => set((state)=> ({coffeeTea: state.coffeeTea +1 })),
	// updateH:() => set((state)=> ({homemadeLiqueur: state.homemadeLiqueur +1 })),
	// updateI:() => set((state)=> ({punch: state.punch +1 })),
	// updateJ:() => set((state)=> ({beer: state.beer +1 })),
	// updateK:() => set((state)=> ({softDrink: state.softDrink +1 })),
}))


// 아이템에 이벤트 리스너를 달아서 해당 아이템이 클릭되었을 때,
// analyze 함수를 발동시키게 한다.
// function analyze(category){   //<--category에 item.strCategory 값 들어간다.
// 	if (category ==='Ordinary Drink'){
// 		updateA()
// 	} else if(category === 'cocktail'){
// 		updateB()
// 	}
// }