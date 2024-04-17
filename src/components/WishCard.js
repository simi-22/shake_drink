import React, {useState, useEffect} from 'react'
import { useFavorite } from '../store/favoriteStore'
import { useProduct} from '../store/productStore';
import DeleteIcon from '@mui/icons-material/Delete';

const priceList=[
	5000, 6000, 7000, 8000, 9000, 
	10000, 15000, 18000, 20000, 25000
]
const newOrNot=[
	'Yes', 'No'
]
const sale =[
	'Sale', ''
]


const WishCard = ({item}) => {
	const {removeItem} = useFavorite()
	const {deleteItemStatus} = useProduct();
	const [price, setPrice] = useState(0);
	const [isNew, setIsNew] = useState('')
	const [isSale, setIsSale] = useState('')

	useEffect(()=>{
		setPrice(priceList[Math.floor(Math.random()*priceList)])
		setIsNew(newOrNot[Math.floor(Math.random()*newOrNot)])
		setIsSale(sale[Math.floor(Math.random()*sale)])
	},[])

  return (
	<div className='card2' >
		<div className='card-img' >
			<img width="100%"
				src={item.image} alt=""/>
			<DeleteIcon className="trash"
				onClick={(e)=>{
					e.stopPropagation();//이벤트 버블링 차단
					deleteItemStatus(item.id);  //productList의 item변화시키기
					removeItem(item.id); //favoriteList에서 item 제거
					
				}}
			/>
		</div>
		<div className='card-text'>
			<div>{item.drink}</div>
			<div>₩ {item.price}</div>
			<div>신상: {item.isNew}</div>
			<div>세일: {item.isSale}</div>
		</div>

	</div>
  )
}

export default WishCard