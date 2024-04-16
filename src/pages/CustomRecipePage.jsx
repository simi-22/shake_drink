import React from 'react'
import '../styles/CustomRecipePage.style.css';

const CustomRecipePage = () => {
  return (
    <div className='customSection'>
      <div className='writeSection'>
        <div className='photoContainer'>
            <h3>칵테일 사진</h3>
            <div className='photoGrid'>
                <div className='imgBox'><img src='data:image/png;base64,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' alt=''/></div>
                <div className='imgBox'>추천! <br/>정면사진</div>
                <div className='imgBox'>추천! <br/>대각선사진</div>
                <div className='imgBox'>추천! <br/>취향껏^^</div>
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
                <div className='ingredientsSearch'><span>재료 이름을 검색해주세요.</span></div>
                <div className='amount'>
                    <input className='inputField' placeholder='용량'/>
                    <div className='amountUnit'><span>단위를 선택해주세요.</span></div>
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
            <h2>나만의 레시피 올리기</h2>
            <img src='data:image/png;base64,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' alt=''/>
            <div>기타내용~~</div>
        </div>
        <div className='settingBox'>
            {/* 카테고리 섹션은 마지막 순위 */}
        </div>
      </div>
    </div>
  )
}

export default CustomRecipePage
