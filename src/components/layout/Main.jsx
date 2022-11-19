import React from "react";
import "../../styles/Main.scss";

const Main = ({ styles }) => {
  return (
    <div className="content-wrapper">
      <div className="content-title">PALETTE</div>
      <div class="apps-card">
        {styles.map((style) => (
          <div class="app-card">
            <span>Premiere Pro</span>
            <div class="app-card__subtext">
              Edit, master and create fully proffesional videos
            </div>
            <div class="app-card-buttons">
              <button class="content-button status-button" style={style}>
                Update
              </button>
              <div class="menu"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
