import React, {useState, useEffect} from "react";
import {Container, Grid, Box, CssBaseline, Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaidIcon from '@mui/icons-material/Paid';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useFavorite } from "../store/favoriteStore";
import {useUser} from '../store/userStore'
import WishCard from "../components/WishCard";


function UserPage() {
	const {favoriteList, removeItem} =useFavorite()
	const {id, email, password, nickName} = useUser()
	const [totalPrice, setTotalPrice] = useState(0);

	console.log('favoriteList :', favoriteList)
	
	function calculate(){
		let result=0;
		for(let i=0; i<favoriteList.length; i++){
			result += favoriteList[i].price
		}
		return result;
	}
	useEffect(()=>{
		const result= calculate()
		setTotalPrice(result)
	},[])

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
							<Box
								height={400} width='30vw' my={4} p={2}
								display="flex" alignItems="center" gap={4}
								sx={{ border: '2px solid grey' }}
								>
								{favoriteList.map((item)=> 
								   <WishCard key={item.id} item={item} 
									onClick={()=>removeItem(item.id)}
								   />
							)}
							</Box>
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<Box
								height={300} width='30vw' my={4} p={2}
								display="flex" alignItems="center" gap={4}
								sx={{ border: '2px solid grey' }}
								>
								<div>
									<div><ShoppingCartIcon/>Cart</div>
									<div>total: {favoriteList.length}</div>
									<div><CheckBoxIcon/>전체선택</div>
									<div>
										{favoriteList.map((item,i)=>
											<div key={i}>
												<div>{item.drink}</div>
												<div>수량 1  + -</div>
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
										<div>총결제금액: {totalPrice}</div>
										<Button sx={{backgroundColor:'green', color:'black'}}>결제하기</Button>
									</div>
							</Box>
						</Grid>
					</Grid>
				</Container>
			{/* </CssBaseline> */}
		</>
	);
}

export default UserPage;