import React, { useState } from 'react'
import upload from '../assets/uploadIcon.png';
import coc1 from '../assets/cocktail1.png';
import coc2 from '../assets/cocktail2.png';
import coc3 from '../assets/cocktail3.png';
import coc4 from '../assets/cocktail4.png';
import coc5 from '../assets/cocktail5.png';
import coc6 from '../assets/cocktail6.png';
import recipe from '../assets/Recipe.png';
import '../styles/CustomRecipePage.style.css';
import { ingredient } from '../constant/list';
import Select from 'react-select';

const CustomRecipePage = () => {
 
    //Select 옵션 셋팅
    const [ingredientOptions] = useState(ingredient.map((option, index) => ({
        value: option,
        label: option,
    })));
    const [unitOptions] = useState([
        { value: "oz", label: "oz"},
        { value: "ml", label: "ml"},
        { value: "tsp", label: "tsp"},
        { value: "pcs", label: "pcs"},
    ]);

    //state 설정
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [selectedAmount, setSelectedAmount] = useState('');
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [clickedImageIndex, setClickedImageIndex] = useState(null);

    //재료 추가 함수
    const handleAddIngredient = () => {
        // 재료와 용량을 상태에 추가
        const newIngredient = {
            name: selectedIngredient,
            amount: selectedAmount,
            unit: selectedUnit
        };
        setIngredients([...ingredients, newIngredient]);
        // 인풋 필드 초기화
        setSelectedIngredient(null);
        setSelectedAmount('');
        setSelectedUnit(null);
    };

    const handleImageClick = (index) => {
        setClickedImageIndex(index);
    };

    const imagesToShow = [coc1, coc2, coc3, coc4];

  return (
    <div className='customSection'>
      <div className='writeSection'>
        <div className='photoContainer'>
            <h3>칵테일 사진(기본 디자인 선택)</h3>
            <div className='photoGrid'>
                <div className='imgBox'><img src={upload} alt='이미지'/></div>
                {imagesToShow.map((image, index) => (
                    <div className={`imgBox ${clickedImageIndex === index ? 'clicked' : ''}`} key={index} onClick={() => handleImageClick(index)}>
                    <img src={image} alt='이미지'/></div>
                ))}
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
                <div className='itemHeader'>재료</div>
                <Select options={ingredientOptions} placeholder="- [필수] 재료를 선택해주세요"
                        className='ingredientsSearch'
                        onChange={(selectedOption) => setSelectedIngredient(selectedOption.value)}>
                </Select>
                <div className='amount'>
                    <input className='inputField' value={selectedAmount} placeholder='용량'
                     onChange={(e) => setSelectedAmount(e.target.value)}/>
                    <Select options={unitOptions} placeholder="- [필수] 단위를 선택해주세요"
                            className='amountUnit' 
                            onChange={(selectedOption) => setSelectedUnit(selectedOption.value)}>
                    </Select>
                </div>
            </div>
            <div className='addedIngredients'>
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        {ingredient.name} : {ingredient.amount} {ingredient.unit}
                    </div>
                ))}
            </div>
            <button className='buttonClass' onClick={handleAddIngredient}>재료 추가</button>
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
