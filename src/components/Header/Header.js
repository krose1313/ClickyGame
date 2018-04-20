import React from "react";
import "./Header.css";
import Score  from "../Score";

const Header = props => (
<div>
  <header className="header">
    <h1>Clicky Game!</h1>
    <h2>
      Click on your favorite Dr. Seuss character to begin!
    </h2>
    <h3 className="gameScore">
      <Score score={props.score} />
       Current Game Score: {props.score}
    </h3>
  </header>
</div>
);

export default Header;
