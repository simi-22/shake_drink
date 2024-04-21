import {useNavigate} from 'react-router-dom'

const SimpleCard = ({item}) => {
	const navigate = useNavigate()

  return (
	<div onClick={()=>navigate(`/${item.isDrink}`)} 
		style={{
			border: '1.5px solid #b6b5b5', borderRadius:'10px',
			marginTop:'10px', padding:'10px',
			boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
			width: '250px', height:'330px'
		}}
		onMouseEnter={(e) => { e.target.style.transform = 'scale(1.2)'; }}
    	onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
		>
		<img width="250px" src={item.strDrinkThumb} alt={item.strDrink}/>
		<div style={{width:'225px', borderBottom: '2px solid #b2b1b1', marginTop:'10px'}}></div>
		<div style={{textAlign:'center', fontSize:'20px', marginTop:'10px'}}>
			{item.strDrink}</div>
	</div>
  )
}

export default SimpleCard