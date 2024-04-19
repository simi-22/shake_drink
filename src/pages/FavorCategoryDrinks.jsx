import {useSearchCategoryDrinks} from '../hooks/useCategoryFilter'
import {useParams} from 'react-router-dom'

const FavorCategoryDrinks= ()=>{
	// {drinks [{strDrink:'',strDrinkThumb:'' }, {},{}]}
	const {id} = useParams() 
	const{data, isLoading,isError,error}= useSearchCategoryDrinks(id)
	if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		console.log(error.message)
	}
	console.log('data :', data)
	return(
		<div>
			<div>
				{data?.drinks.map((item, i)=>(
					<div key={i} style={{margin: '10px'}}>
						<h2>{item.strDrink}</h2>
						<img src={item.strDrinkThumb} alt=""  style={{width:'300px'}}/>
					</div>
				))}
			</div>
		</div>
	)

}


export default FavorCategoryDrinks