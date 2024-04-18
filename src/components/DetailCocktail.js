import React from 'react'

const DetailCocktail = ({detailData}) => {
    console.log('detailData',detailData)
  return (
    <div>
      <div>칵테일 : {detailData?.strDrink}</div>
			<div>
				<img src={detailData?.strDrinkThumb} />
			</div>
			<div>
				{detailData?.ingredients.map((item, index) => (
					<h1>
						재료{index + 1} {item.ingredient} :{item.measure}
					</h1>
				))}
			</div>
			<div>레시피 : {detailData?.strInstructions}</div>
			<div>컵 : {detailData?.strGlass}</div>
    </div>
  )
}

export default DetailCocktail
