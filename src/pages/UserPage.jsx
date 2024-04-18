import React, {useState, useEffect} from "react";
import {Container, Grid, Box, CssBaseline, Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaidIcon from '@mui/icons-material/Paid';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import { useFavorite } from "../store/favoriteStore";
import {useUser} from '../store/userStore'
import {useCart} from '../store/cartStore';
import WishCard from "../components/WishCard";
import {useNavigate} from 'react-router-dom'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Checkbox from '@mui/material/Checkbox';
import CartCard from "../components/CartCard";
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function UserPage() {
	const navigate = useNavigate()
	const {favoriteList, emptyFavoriteList} =useFavorite()
	const {cartList, addToCart, addListToCart, removeFromCart, addCount, minusCount} = useCart()
	const {id, email, password, nickName} = useUser()
	const [totalPrice, setTotalPrice]=useState(0)
	const [open, setOpen]= useState(false)
	const [checked, setChecked] = useState(false);
	const [countChange, setCountChange]= useState(false)

  	const handleChange = (event) => {
    	setChecked(event.target.checked);
  	};

	console.log('favoriteList :', favoriteList)
	
	function calculateTotalPrice(){
		let result=0;
		for(let i=0; i<cartList.length; i++){
			result += cartList[i].price * cartList[i].count
		}
		setTotalPrice(result);
	}
	function add(id){
		addCount(id)
		setCountChange(!countChange)
	}
	function minus(id){
		minusCount(id)
		setCountChange(!countChange)
	}

	function addFavsToCart(){
		if(checked){
			addListToCart(favoriteList)
			emptyFavoriteList()
			setChecked(false)
			calculateTotalPrice()
		}
	}
	function payment(){
		setOpen(true)
	}
	function handleClose(){
		setOpen(false)
	}
	function handleClose2(){
		setOpen(false)
		navigate('/')
	}
	useEffect(()=>{   //수량이 바뀔 때마다 총액계산 다시 하게 한다.
		calculateTotalPrice()
	},[countChange, cartList.length])


	return (
		<>
			{/* <CssBaseline> */}
				<Container maxWidth='lg' >
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={6}>
							<Box
								Container
								maxWidth='sm'  
								sx={{border: '2px solid grey', py:'10px',
									display:'flex',justifyContent:'center', gap:'20px' 
								}}
								>
								<AccountCircleIcon style={{ fontSize: '150px', color:'grey' }} />
								<div>
									<div>id: {id}</div>
									<div>@이메일: {email}</div>
									<div>password: {password}</div>
									<div>닉네임: {nickName}</div>
								</div>
							</Box>
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<Box
								Container
								maxWidth='sm'  
								sx={{border: '2px solid grey', py:'10px'}}
								>
									<div>
										<div style={{
													display:'flex',justifyContent:'start', gap:'20px'
												}}>
											<div>
												<div>
													<PaidIcon/>
													<div>포인트 250P</div>
												</div>
											</div>
											<div>
												<CalendarViewWeekIcon/>
												<div>쿠폰0장</div>
											</div>
											<div>
												<ModeEditIcon/>
												<div>리뷰0개</div>
											</div>
										</div>
										<div>
											<span>정보변경</span>
											<span>문의내역</span>
											<span>주문내역</span>
										</div>
									</div>
								
							</Box>
						</Grid>
						<Grid item xs={12} md={6} lg={6} >
							<Container
								maxWidth='sm'  
								sx={{border: '2px solid grey', py:'10px'}}
								>
									<h1>Wish List</h1>
									<Checkbox 
										checked={checked}
      									onChange={handleChange}
      									inputProps={{ 'aria-label': 'controlled' }}
									/> 전체선택
									<Button onClick={addFavsToCart}
										sx={{backgroundColor:'red', color:'black', mx:'10px'}}
									>Cart에 담기</Button>
									<div>
										{favoriteList.map((item)=> 
										<WishCard key={item.id} item={item} 
											addToCart={addToCart}
										/>)}
									</div>
							</Container>
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<Container
								maxWidth='sm'  
								sx={{border: '2px solid grey',py:'10px'}}
								>
									<h1>Cart</h1>
								<div>
									<div><ShoppingCartIcon/> total: {cartList.length}</div>
									<div>
										{cartList?.map((item,i)=>
											<div key={i} >
												<div style={{display:'flex', justifyContent:'start', gap:'5px'}}>
													<CartCard item={item}/> 
													<ClearIcon onClick={()=>{removeFromCart(item.id); calculateTotalPrice();
													}}/>
												</div>
												<div>수량:<AddCircleOutlineIcon onClick={()=>add(item.id)}/> {item.count} <RemoveCircleOutlineIcon onClick={()=>minus(item.id)}/></div>
											</div>
									)}
									</div>
								</div>
							</Container>
							<Container
								maxWidth='sm'  
								sx={{border: '2px solid grey', mt:'10px', py:'10px'}}
								>
									<div>
										<div>Payment</div>
										{/* <Button onClick={calculateTotalPrice}
										sx={{backgroundColor:'green', color:'black'}}>총액계산</Button> */}
										<div style={{
											border:'1px solid grey',
											padding:'5px', margin:'10px 0'
										}}>
											<div>
												{cartList.map((item,i)=>(
													<div key={i}>
														<span>{item.price}</span>
														<span> * {item.count}</span>
													</div>
												))}
											</div>
											<div>총결제금액: {totalPrice}</div>
										</div>
										<Button onClick={payment}
										sx={{backgroundColor:'green', color:'black'}}>결제하기</Button>
									</div>
							</Container>
						</Grid>
					</Grid>
					<div>
						{open ?  
						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
							{"결제정보"}
							</DialogTitle>
							<DialogContent>
							<DialogContentText id="alert-dialog-description">
								총액: {totalPrice} 입니다. 확정합니까?
							</DialogContentText>
							</DialogContent>
							<DialogActions>
							<Button onClick={handleClose}>취소</Button>
							<Button onClick={handleClose2} autoFocus>
								확인
							</Button>
							</DialogActions>
						</Dialog>
						: ''}
					</div>
					
				</Container>
			{/* </CssBaseline> */}
		</>
	);
}

export default UserPage;