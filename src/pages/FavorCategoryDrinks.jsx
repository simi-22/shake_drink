import {useSearchCategoryDrinks} from '../hooks/useCategoryFilter'
import {useParams} from 'react-router-dom'
import {Container } from '@mui/material';
import SimpleCard from '../components/SimpleCard';

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
	console.log('Favor category data :', data)
	return(
		<div>
			<Container >
				<div style={{fontSize: '40px', margin:'20px 0'}}>
					최애 Category Drinks</div>
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