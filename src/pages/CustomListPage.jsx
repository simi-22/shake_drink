import React from 'react'
import '../styles/CustomListPage.style.css';
import { useNavigate } from 'react-router-dom';

const CustomListPage = () => {
    const navigate = useNavigate();
    const goToCustomPage = ()=>{
        navigate('/custom');
    }
  return (
    <div>
      <div className='bannerSection'>
        <button onClick={goToCustomPage}>나만의 레시피 만들기</button>
      </div>
      <div className='customTitle'>함께 섞어 마셔!</div>
      <div className='customItemSection'>
        <div className='sample'>Sample</div>
        <div className='sample'>Sample</div>
        <div className='sample'>Sample</div>
        <div className='sample'>Sample</div>
        <div className='sample'>Sample</div>
        <div className='sample'>Sample</div>
      </div>
    </div>
  )
}

export default CustomListPage
