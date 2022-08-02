import React, { useEffect, useState } from "react";
import CardData from "../../data/cardData";
import Card from "../../dls/molecules/Card/Card";
import { FlexContainer } from "../../dls/primitives/Flex";
import { AdsContainer } from "./AdsCard.styled";

const AdsCard = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGetData(CardData);
    }, 5000);

    return () => clearTimeout(timer);
  }, [getData]);

  return (
    <React.Fragment>
      <FlexContainer>
        {!getData.length && <h1>Ads Loading...</h1>}
        {getData &&
          getData.map((d, ind) => {
            return (
              <AdsContainer key={ind}>
                <Card
                  src={d.imageSrc}
                  alt={d.imageAlt}
                  textContent={d.cardContent}
                  buttonText={d.buttonText}
                  varient={d.varient}
                />
              </AdsContainer>
            );
          })}
      </FlexContainer>
    </React.Fragment>
  );
};

export default AdsCard;
