import React from "react";
import "./GameCards.css";

const GameCards = props => (
  <div
    role="img"
    aria-label="Game Cards"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`GameCards${props.shake ? " shake" : ""}`}
  />
);

export default GameCards;
