import React from "react";
import "../../styles/Header.scss";

const Header = (props) => {

  return (
    <div class="header">
      <div class="menu-circle"></div>
      <div class="header-menu">
        <a
          className={props.section === "Button" ? "menu-link is-active" : "menu-link"}
          onClick={() => props.sectionHandler("Button")}
        >
          Button
        </a>
        <a
          className={props.section === "Input" ? "menu-link is-active" : "menu-link"}
          onClick={() => props.sectionHandler("Input")}
        >
          Input
        </a>
      </div>
    </div>
  );
};

export default Header;
