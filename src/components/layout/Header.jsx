import React from "react";
import "../../styles/Header.scss";

const Header = (props) => {

  return (
    <div class="header">
      <div class="menu-circle"></div>
      <div class="header-menu">
        <a
          class="menu-link is-active"
          onClick={() => props.sectionHandler("Button")}
        >
          Button
        </a>
        <a
          class="menu-link is-active"
          onClick={() => props.sectionHandler("Input")}
        >
          Input
        </a>
      </div>
    </div>
  );
};

export default Header;
