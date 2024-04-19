import {useSearchCategoryDrinks} from '../hooks/useCategoryFilter'
import {useParams} from 'react-router-dom'
import {Container } from '@mui/material';
import SimpleCard from '../components/SimpleCard';


const FavorCategoryDrinks= ()=>{
	// {drinks [{strDrink:'',strDrinkThumb:'' }, {},{}]}
	const {id} = useParams() 
	function convertToCategory(str){
		if(str==='ordinaryDrink') return "Ordinary Drink"
		if(str==='cocktail') return "Cocktail"
		if(str==='shake') return"Shake"
		if(str==='otherUnknown') return"Other / Unknown"
		if(str==='cocoa') return"Cocoa"
		if(str==='shot') return"Shot"
		if(str==='coffee') return"Coffee / Tea"
		if(str==='homemadeLiqueur') return"Homemade Liqueur"
		if(str==='punch') return"Punch / Party Drink"
		if(str==='beer') return"Beer"
		if(str==='softDrink') return "Soft Drink"
	}
	const category = convertToCategory(id)

	const{data, isLoading,isError,error}= useSearchCategoryDrinks(category)
	if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		console.log(error.message)
	}
	console.log('Favor category data :', data)
	return(
		<div>
			<Container >
				<div style={{fontSize: '35px', margin:'20px 0'}}>
					당신의 최애 drink : 
					<span style={{color:'red'}}> {category}</span>
				</div>
				<div style={{display:'flex', justifyContent:'flex-start', flexWrap: 'wrap', gap:'15px', width:'95vw'}}>
					{data?.drinks.map((item, i)=>(
						<SimpleCard key={i} item={item} />
					))}
				</div>
					
			</Container>
		</div>
	)

}


export default FavorCategoryDrinks