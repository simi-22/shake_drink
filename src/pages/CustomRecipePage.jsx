import React from 'react'
import upload from '../assets/uploadIcon.png';
import coc1 from '../assets/cocktail1.png';
import coc2 from '../assets/cocktail2.png';
import coc3 from '../assets/cocktail3.png';
import recipe from '../assets/Recipe.png';
import '../styles/CustomRecipePage.style.css';

const CustomRecipePage = () => {
   
    const ingredientOpion = [];
    const unitOptions = ["- [필수] 단위를 선택해주세요", "oz", "ml", "개"];

  return (
    <div className='customSection'>
      <div className='writeSection'>
        <div className='photoContainer'>
            <h3>칵테일 사진(기본 디자인 선택)</h3>
            <div className='photoGrid'>
                <div className='imgBox'><img src={upload} alt='이미지'/></div>
                <div className='imgBox'><img src={coc1} alt='이미지'/></div>
                <div className='imgBox'><img src={coc2} alt='이미지'/></div>
                <div className='imgBox'><img src={coc3} alt='이미지'/></div>
            </div>
        </div>
        <div className='nameContainer'>
            <h3>칵테일 이름</h3>
            <div className='inputForm'>
                <input className='inputField' placeholder='이름을 지어주세요'/>
                <div className='numChar'>0/50</div>
            </div>
        </div>
        <div className='enNameContainer'>
            <h3>칵테일 영문이름</h3>
            <div className='inputForm'>
                <input className='inputField' placeholder='이름을 지어주세요'/>
                <div className='numChar'>0/50</div>
            </div>
        </div>
        <div className='descriptionContainer'>
            <h3>칵테일 설명</h3>
            <div className='inputForm'>
                <textarea className='textField' placeholder='칵테일 소개를 해주세요'/>
                <div className='numChar'>0/200</div>
            </div>
        </div>
        <div className='ingredientsContainer'>
            <h3>재료 정보</h3>
            <div className='itemForm'>
                <div className='itemHeader'>재료1</div>
                <select className='ingredientsSearch'>
                    <option value="" disabled selected> - [필수] 재료를 선택해주세요</option>
                </select>
                <div className='amount'>
                    <input className='inputField' placeholder='용량'/>
                    <select className='amountUnit'>
                        {unitOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button className='buttonClass'>재료 추가</button>
        </div>
        <div className='recipeContainer'>
            <h3>레시피 정보</h3>
            <div className='inputForm'>
                <textarea className='textField' placeholder='레시피 설명을 작성해주세요'/>
                <div className='numChar'>0/200</div>
            </div>
        </div>
      </div>
      <div className='settingSection'>
        <div className='infoBox'>
            <h1>나만의 레시피!!</h1>
            <img src={recipe} alt='이미지'/>
        </div>
        <div className='settingBox'>
            <button>UPLOAD</button>
        </div>
      </div>
    </div>
  )
}

export default CustomRecipePage
