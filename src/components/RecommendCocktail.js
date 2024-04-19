import React, { useState } from "react";
import RecommendCard from "./card/RecommendCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Collapse, Button, Card, CardContent } from "@mui/material";

const RecommendCocktail = ({ searchByIngredientData, base }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div>
        <h1>Similar cocktail made with a base</h1>
      </div>
      <div className="d-flex flex-column">
        <Button color="warning" onClick={handleToggle}>
          {open ? "접기" : "추천 칵테일 펼치기"}
        </Button>
        <Collapse in={open}>
          <Card>
            <CardContent>
              {searchByIngredientData && searchByIngredientData.length > 0 ? (
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  containerClass="carousel-container"
                  itemClass="carousel-item-padding-40-px"
                  centerMode={true}
                >
                  {searchByIngredientData.map((recommendData) => (
                    <RecommendCard
                      cockTailData={recommendData}
                      key={recommendData.idDrink}
                      base={base}
                    />
                  ))}
                </Carousel>
              ) : (
                <div>No Similar data available</div>
              )}
            </CardContent>
          </Card>
        </Collapse>
      </div>
    </div>
  );
};

export default RecommendCocktail;