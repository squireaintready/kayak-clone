import React, { useState } from "react";
import "./styles.css";

const Card = ({ airlineData }) => {
  const [isHover, setIsHover] = useState(false);
  const makeHoverTrue = () => {
    setIsHover(true);
  };
  const makeHoverFalse = () => {
    setIsHover(false);
  };

  return (
    <div className='card__root'>
      <div
        className="card__card"
        onMouseEnter={makeHoverTrue}
        onMouseLeave={makeHoverFalse}
      >
        <img
          src={`https://www.kayak.com${airlineData.logoURL}`}
          alt="not available"
          className="card__img"
        />
        <div className="card__content">
          <h4 className="card__hoveredTitle">{airlineData.name}</h4>
          {isHover ? (
            <div className="card__hoveredContent">
              <p className="card__hoveredText">{airlineData.alliance}</p>
              <p className="card__hoveredText">{airlineData.phone}</p>
              <p className="card__hoveredURL">{airlineData.site}</p>
            </div>
           ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
