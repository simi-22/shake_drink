import React, {useState, useEffect} from "react";
import {Container, Grid, Box, CssBaseline, Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaidIcon from '@mui/icons-material/Paid';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
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
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function UserPage() {
	const navigate = useNavigate()
	const {favoriteList} =useFavorite()
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
			setChecked(false)
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
	},[countChange])


	return (
		<>
			{/* <CssBaseline> */}
				<Container maxWidth='lg' >
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={6}>
							<Box
								height={300} width='30vw' my={4} p={2}
								display="flex" alignItems="center" gap={4}
								sx={{ border: '2px solid grey' }}
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
								height={300} width='30vw' my={4} p={2}
								display="flex" alignItems="center" gap={4}
								sx={{ border: '2px solid grey' }}
								>
									<div>
										<div>
											<span>
												<div>
													<PaidIcon/>
													<div>포인트 250P</div>
												</div>
											</span>
											<span>
												<CalendarViewWeekIcon/>
												<div>쿠폰0장</div>
											</span>
											<span>
												<ModeEditIcon/>
												<div>리뷰0개</div>
											</span>
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
								sx={{border: '2px solid grey'}}
								>
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
							<Box
								height={300} width='30vw' my={4} p={2}
								display="flex" alignItems="center" gap={4}
								sx={{ border: '2px solid grey' }}
								>
								<div>
									<div><ShoppingCartIcon/>Cart</div>
									<div>total: {cartList.length}</div>
									<div>
										{cartList?.map((item,i)=>
											<div key={i}>
												<span>{item.drink}</span>
												<span><ClearIcon onClick={()=>removeFromCart(item.id)}/></span>
												<div>수량:<AddCircleOutlineIcon onClick={()=>add(item.id)}/> {item.count} <RemoveCircleOutlineIcon onClick={()=>minus(item.id)}/></div>
											</div>
									)}
									</div>
								</div>
							</Box>
							<Box
								height={100} width='30vw' my={4} p={2}
								display="flex" alignItems="center" gap={4}
								sx={{ border: '2px solid grey' }}
								>
									<div>
										
										<Button onClick={calculateTotalPrice}
										sx={{backgroundColor:'green', color:'black'}}>총액계산</Button>
										<div>
											{cartList.map((item,i)=>(
												<div key={i}>
													<span>{item.price}</span>
													<span> * {item.count}</span>
												</div>
											))}
										</div>
										<div>총결제금액: {totalPrice}</div>
										<Button onClick={payment}
										sx={{backgroundColor:'green', color:'black'}}>결제하기</Button>
									</div>
							</Box>
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
							{"Use Google's location service?"}
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