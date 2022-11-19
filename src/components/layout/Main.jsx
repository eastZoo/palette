import React, { useState } from "react";
import "../../styles/Main.scss";
import Card from "../Card";

const Main = ({ styles, onRemove }) => {
  return (
    <div className="content-wrapper">
      <div className="content-title">PALETTE</div>
      <div class="apps-card">
        {styles.map((style , key) => (
          <Card style={style} onRemove={onRemove} key={key}/>
        ))}
      </div>
    </div>
  );
};

export default Main;
