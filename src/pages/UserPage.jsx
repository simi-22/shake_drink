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
import {useOrder} from '../store/orderStore';
import {useAnalyze} from '../store/analyzeStore'
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
import {Form} from 'react-bootstrap'


function UserPage() {
	const navigate = useNavigate()
	const {favoriteList, emptyFavoriteList} =useFavorite()
	const {cartList, addToCart, addListToCart, removeFromCart, addCount, minusCount} = useCart()
	const {orderList, addListToOrder, removeListFromOrder, totalMoney, addTotalMoney, minusTotalMoney} =useOrder()
	const {id, email, password, nickName, editUser} = useUser()
	const {firstRatedCategory, "Ordinary Drink":ordinaryDrink, "Cocktail":cocktail, "Shake":shake, "Other / Unknown":otherUnknown, "Cocoa":cocoa, "Shot":shot, "Coffee / Tea":coffeeTea, "Homemade Liqueur":homemadeLiqueur, "Punch / Party Drink":punch, "Beer":beer, "Soft Drink":softDrink} = useAnalyze()

	const [totalPrice, setTotalPrice]=useState(0)
	const [open, setOpen]= useState(false) // 결제 확인창
	const [show, setShow] = useState(false) // 주문내역 창
	const [showUserDialog, setShowUserDialog] =useState(false) // user Dialog
	const [showFavorC, setShowFavorC] =useState(false) //FavorCategory Dialog
	const [checked, setChecked] = useState(false);
	const [countChange, setCountChange]= useState(false)
	const [orderedList, setOrderedList] = useState([])
	const [formData, setFormData] = useState({
		email:'',
		password:'',
		nickname:''
	})
	// const [orderedMoney, setOrderedMoney] =useState([])
	

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
	function payment(list){
		setOpen(true)
		setOrderedList(list)
		addListToOrder(list)
	}
	function showOrder(){
		setShow(true)
	}
	function showFavorCategory(){
		setShowFavorC(true)
	}
	function showRecommendations(){
		setShowFavorC(false)
		navigate(`/favor-category/${firstRatedCategory}`)
		
	}
	function handleClose(){ // 취소버튼
		setOpen(false)
		
		removeListFromOrder(orderedList)
	}
	function handleClose2(){ //확인버튼
		setOpen(false)
		addTotalMoney(totalPrice)
		
	}
	function handleShowClose(){
		setShow(false)
	}
	function changeUserInfo(){
		setShowUserDialog(true)
	}
	function closeUserDialog(){
		setShowUserDialog(false)
	}
	function closeFavorCategory(){
		setShowFavorC(false)
	}

	const handleSubmit=(event)=>{
		event.preventDefault();
		// setAuth(true)
		editUser(formData) // <---임시저장formData <--- form으로부터 입력값.
		console.log('수정된 user정보:',formData)
		// setShowUserDialog(false)
	}
	const handleUserChange=(event)=>{
		const {name, value} = event.target
		setFormData((prev)=>({
			...prev,
			[name]: value,    //변수의 값으로 프로퍼티를 만들 경우 
		}))
	}

	useEffect(()=>{   //수량이 바뀔 때마다 총액계산 다시 하게 한다.
		calculateTotalPrice()
	},[countChange, cartList.length, showUserDialog])
	//showUserDialog 가 바뀔 때, 화면이 다시 갱신되어 user정보가 바뀌게 함.


	return (
		<>
			{/* <CssBaseline> */}
				<Container maxWidth='lg' >
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={6}>
							<Container
								maxWidth='sm'  
								sx={{border: '2px solid grey', py:'10px',
									display:'flex',justifyContent:'center', gap:'20px' 
								}}
								>
								<AccountCircleIcon style={{ fontSize: '150px', color:'grey' }} />
								<div style={{marginTop: '20px'}}>
									<div>id: {id}</div>
									<div>@이메일: {email}</div>
									<div>password: {password}</div>
									<div>닉네임: {nickName}</div>
								</div>
							</Container>
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<Box
								Container
								maxWidth='sm'  
								sx={{border: '2px solid grey', padding:'20px'}}
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
										<div style={{margin:'20px 0'}}>
											<Button variant="contained" onClick={changeUserInfo}>정보변경</Button>
											<Button variant="contained" onClick={showFavorCategory} sx={{ml:'10px'}}>Favor Category</Button>
											<Button variant="contained" onClick={showOrder} sx={{ml:'10px'}}>주문내역</Button>
										</div>
									</div>
								
							</Box>
						</Grid>
						<Grid item xs={12} md={6} lg={6} >
							<Container
								maxWidth='sm'  
								sx={{border: '2px solid grey', py:'10px'}}
								>
									<h3>Wish List</h3>
									<Checkbox 
										checked={checked}
      									onChange={handleChange}
      									inputProps={{ 'aria-label': 'controlled' }}
									/> 전체선택
									<Button onClick={addFavsToCart}
										variant="contained" color="error" sx={{ml:'10px'}}
									>Cart에 담기</Button>
									<div>
										{favoriteList.map((item)=> 
										<WishCard key={item.idDrink} item={item} 
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
									<h3>Cart</h3>
								<div>
									<div style={{fontSize:"25px"}}><ShoppingCartIcon/> total: {cartList.length}</div>
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
										<h3>Payment</h3>
										{/* <Button onClick={calculateTotalPrice}
										sx={{backgroundColor:'green', color:'black'}}>총액계산</Button> */}
										<div style={{
											border:'1px solid grey',
											padding:'5px', margin:'10px 0'
										}}>
											<div>
												{cartList.map((item,i)=>(
													<div key={i}>
														<span>{item.strDrink}: </span>
														<span>{item.price}</span>
														<span> * {item.count}</span>
													</div>
												))}
											</div>
											<div>총결제금액: {totalPrice}</div>
										</div>
										<Button onClick={()=>payment(cartList)}
										variant="contained" color="success">결제하기</Button>
									</div>
							</Container>
						</Grid>
					</Grid>
					<div> 
						{open ?   // 결제정보 다이알로그  
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
					<div>
						{show ?  // 주문내역 다이알로그
						<Dialog
							open={show}
							onClose={handleShowClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
							{"주문내역"}
							</DialogTitle>
							<DialogContent>
							<DialogContentText id="alert-dialog-description">
								<div>
									{orderList.map((item,i)=>(
										<div key={i}>
											<div>{item.strDrink}: {item.price}*{item.count}원</div>
										</div>
									))}
								</div>
								<div>Total: {totalMoney} 원</div>
							</DialogContentText>
							</DialogContent>
							<DialogActions>
							<Button onClick={handleShowClose} autoFocus>확인</Button>
							</DialogActions>
						</Dialog>
						: ''}
					</div>
					<div>
						{showFavorC ?  // Favor Category 다이알로그
						<Dialog
							open={showFavorC}
							onClose={closeFavorCategory}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
							{"자주 찾은 Category 정보"}
							</DialogTitle>
							<DialogContent>
							<DialogContentText id="alert-dialog-description">
								<h3>최애 카테고리: {firstRatedCategory}</h3>
								<div>
									<div>ordinary drink : {ordinaryDrink}</div>
									<div>cocktail : {cocktail}</div>
									<div>shake : {shake}</div>
									<div>other /unknown : {otherUnknown}</div>
									<div>cocoa : {cocoa}</div>
									<div>shot : {shot}</div>
									<div>coffee tea : {coffeeTea}</div>
									<div>homemade liqueur : {homemadeLiqueur}</div>
									<div>punch : {punch}</div>
									<div>beer : {beer}</div>
									<div>soft drink : {softDrink}</div>
								</div>
								<Button variant="contained"
									onClick={showRecommendations}
								>추천 주류/음료</Button>
								
							</DialogContentText>
							</DialogContent>
							<DialogActions>
							<Button onClick={closeFavorCategory} autoFocus>확인</Button>
							</DialogActions>
						</Dialog>
						: ''}
					</div>
					<div>
						{showUserDialog ?  // 유저정보변경 다이알로그
						<Dialog
							open={showUserDialog}
							onClose={closeUserDialog}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
							{"주문내역"}
							</DialogTitle>
							<DialogContent>
							<DialogContentText id="alert-dialog-description">
								<Form onSubmit={(event)=>handleSubmit(event)}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control 
											type="email" 
											placeholder="Email"
											name='email' 
											value={formData.email}
											onChange={handleUserChange}
											/>
										<Form.Text className="text-muted">
											아이디가 아닌 이메일을 입력해주세요.
										</Form.Text>
									</Form.Group>

									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control 
											type="password" 
											placeholder="Password" 
											name="password"
											value={formData.password}
											onChange={handleUserChange}
											/>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicText">
										<Form.Label>Nickname</Form.Label>
										<Form.Control 
											type="text" 
											placeholder="Nickname" 
											name="nickname"
											value={formData.nickname}
											onChange={handleUserChange}
											/>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicCheckbox">
										<Form.Check type="checkbox" label="Check me out" />
									</Form.Group>
									<Button variant="contained" type="submit"
									>수정</Button>
								</Form>
							</DialogContentText>
							</DialogContent>
							<DialogActions>
							<Button variant="contained" onClick={closeUserDialog} autoFocus>확인</Button>
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