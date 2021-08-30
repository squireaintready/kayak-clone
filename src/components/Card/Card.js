import React, { useState } from "react";
import useStyles from "./styles";

const Card = ({ airlineData }) => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  const makeHoverTrue = () => {
    setIsHover(true);
  };
  const makeHoverFalse = () => {
    setIsHover(false);
  };

  return (
    <div className={classes.root}>
      <div
        className={classes.card}
        onMouseEnter={makeHoverTrue}
        onMouseLeave={makeHoverFalse}
      >
        <img
          src={`https://www.kayak.com${airlineData.logoURL}`}
          alt="not available"
          className={classes.img}
        />
        <div className={classes.content}>
          <h4 className={classes.hoveredTitle}>{airlineData.name}</h4>
          {isHover ? (
            <div className={classes.hoveredContent}>
              <p className={classes.hoveredText}>{airlineData.alliance}</p>
              <p className={classes.hoveredText}>{airlineData.phone}</p>
              <p className={classes.hoveredURL}>{airlineData.site}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
