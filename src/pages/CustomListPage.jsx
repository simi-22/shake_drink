import React, { useState } from 'react'
import '../styles/CustomListPage.style.css';
import coc1 from '../assets/cocktail1.png';
import { useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomListPage = () => {

    const navigate = useNavigate();
    const goToCustomPage = ()=>{
        navigate('/custom');
    }
    
    //state 리스트
    const[isLiked, setIsLiked] = useState(false);

    //함수
    const handleLikeClick = (e)=>{
      e.stopPropagation(); // 이벤트 버블링 방지
      setIsLiked(!isLiked);
    }

  return (
    <div>
      <div className='bannerSection'>
        <button onClick={goToCustomPage}>나만의 레시피 만들기</button>
      </div>
      <div className='customTitle'>함께! 섞어마셔 리스트</div>
      <div className='customItemSection'>
        <div className='sample'>
          <div className='imageBox'>
            <img src={coc1} alt='이미지'/>
            <button className='faHeart' onClick={handleLikeClick}>
                <FontAwesomeIcon icon={isLiked? faSolidHeart : faHeart} color={isLiked ? 'red' : 'white'}/>
            </button>
          </div>
          <div className='textBox'>
            <div className='customsTitle'>cocktailName</div>
            <div className='customsScript'>cocktailScript</div>
          </div>
        </div>
        <div className='sample'>
          <div className='imageBox'>
            <img src={coc1} alt='이미지'/>
          </div>
          <div className='textBox'>cocktail1</div>
        </div>
        <div className='sample'>
          <div className='imageBox'>
            <img src={coc1} alt='이미지'/>
          </div>
          <div className='textBox'>cocktail1</div>
        </div>
        <div className='sample'>
          <div className='imageBox'>
            <img src={coc1} alt='이미지'/>
          </div>
          <div className='textBox'>cocktail1</div>
        </div>
        <div className='sample'>
          <div className='imageBox'>
            <img src={coc1} alt='이미지'/>
          </div>
          <div className='textBox'>cocktail1</div>
        </div>
        <div className='sample'>
          <div className='imageBox'>
            <img src={coc1} alt='이미지'/>
          </div>
          <div className='textBox'>cocktail1</div>
        </div>
      </div>
    </div>
  )
}

export default CustomListPage
