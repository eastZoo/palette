import React from "react";
import "../../styles/Main.scss";

const Main = ({ styles, type, onRemove }) => {
  return (
    <div className="content-wrapper">
      <div className="content-title">PALETTE</div>
      <div class="apps-card">
        {styles.map((style) => (
          <div class="app-card">
            <div className="app-card-title">
              <div>{type}</div>
              <div onClick={() => onRemove(style.id)}>Delete</div>
            </div>
            <div class="app-card-buttons">
              <button style={style}>
                {style.text}
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
