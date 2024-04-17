import React, {useState, useEffect} from 'react'
import { useFavorite } from '../store/favoriteStore'
import { useProduct} from '../store/productStore';
import DeleteIcon from '@mui/icons-material/Delete';

const priceList=[
	5000, 6000, 7000, 8000, 9000, 
	10000, 15000, 18000, 20000, 25000
]
const newOrNot=[
	'New', 'No'
]
const sale =[
	'Sale', 'No'
]

const WishCard = ({item, addToCart}) => {
	const {removeItem, setPrice, setIsNew, setIsSale} = useFavorite()
	const {deleteItemStatus} = useProduct();
	
	console.log('WishCard item.price :', item.price)

	useEffect(()=>{
		const priceIndex =Math.floor(Math.random()*priceList.length)
		const newOrNotIndex = Math.floor(Math.random()*newOrNot.length)
		const saleIndex =Math.floor(Math.random()*sale.length)
		console.log('priceIndex :', priceIndex)
		setPrice(item.id, priceList[priceIndex])
		setIsNew(item.id, newOrNot[newOrNotIndex])
		setIsSale(item.id, sale[saleIndex])
	},[])

	useEffect(() => {
		console.log('WishCard item:', item);
	}, [item]);

  return (
	<div className='card2' onClick={()=>addToCart(item)} >
		<div className='card-img' >
			<img width="40%"
				src={item.image} alt=""/>
			<DeleteIcon className="trash" style={{zIndex:'2'}}
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