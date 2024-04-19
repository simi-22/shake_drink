import React, { useState } from 'react'
import '../styles/CustomListPage.style.css';
import coc1 from '../assets/cocktail1.png';
import coc2 from '../assets/cocktail2.png';
import coc3 from '../assets/cocktail3.png';
import coc4 from '../assets/cocktail4.png';
import coc5 from '../assets/cocktail5.png';
import coc6 from '../assets/cocktail6.png';
import { useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomListPage = () => {

    // 로컬저장소 데이터 가져오기
    const drinkData = JSON.parse(localStorage.getItem('drinkData')) || { drinks: [] };
    console.log(drinkData);

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
    
    const imagesToShow = [coc1, coc2, coc3, coc4, coc5, coc6, coc4, coc5, coc6, coc1, coc3, coc5, coc2];
   

  return (
    <div>
      <div className='bannerSection'>
        <button onClick={goToCustomPage}>
          <span class="buttonText">나만의 레시피 만들기</span>
          <span class="clickText">Click!!</span>
        </button>
      </div>
      <div className='customTitle'>함께! 섞어마셔 리스트</div>

      <div className='customItemSection'>
        {/* 업로드된 데이터 */}
        {drinkData.drinks.reverse().map((index) => (
            <div key={index} className='sample'>
            <div className='imageBox'>
              <img src={index.strImageSource} alt='이미지'/>
            </div>
            <div className='customTextBox'>
              <div className='customsTitle'>{index.strDrink}</div>
              <div className='customsScript'>
                <div>{index.strInstructions}</div>
                {/* <button className='faHeart' onClick={handleLikeClick}>
                  <FontAwesomeIcon icon={isLiked? faSolidHeart : faHeart} color={isLiked ? 'red' : 'white'}/>
                </button> */}
              </div>
            </div>
          </div>
        ))}

        {/* 하드코딩된 임의 데이터 */}
        {imagesToShow.map((image, index) => (
            <div key={index} className='sample'>
            <div className='imageBox'>
              <img src={image} alt='이미지'/>
            </div>
            <div className='textBox'>
              <div className='customsTitle'>cocktailName</div>
              <div className='customsScript'>
                <div className='scriptDiv'>cocktailScript</div>
                <button className='faHeart' onClick={handleLikeClick}>
                  <FontAwesomeIcon icon={isLiked? faSolidHeart : faHeart} color={isLiked ? 'red' : 'white'}/>
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default CustomListPage
