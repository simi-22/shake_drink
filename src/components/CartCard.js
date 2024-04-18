
const CartCard = ({item}) => {
  return (
	<div className='card2' style={{display:'flex', justifyContent:'start', gap:'5px',
	border:'1px solid grey', borderRadius:'10px',
	padding:'5px', marginTop:'10px', width: "350px"
	}}>
		<div className='card-img' >
			<img width="100px"
				src={item.image} alt=""/>
		</div>
		<div className='card-text'>
			<div>{item.drink}</div>
		</div>
	</div>
  )
}

export default CartCard