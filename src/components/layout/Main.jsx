import React, { useState } from "react";
import "../../styles/Main.scss";
import Card from "../Card";

const Main = ({ styles, onRemove, onCreate, preview, section }) => {
  return (
    <div className="content-wrapper">
      <div className="content-title">PALETTE</div>
      <div className="apps-card">
        {styles.map((style, key) => (
          <Card style={style} onRemove={onRemove} key={key} section={section}/>
        ))}
      </div>
      <div className="main-footer">
        <div className="preview">
          <div>PREVIEW</div>

          
          {section === "Button" && (
            <button style={preview}>{preview.text || "button"}</button>
          )}

          {section === "Input" && <input placeholder="input.." style={preview} value={"text"}></input>}
          
          <button
            style={{ marginTop: "20px" }}
            type="submit"
            className="preview__btn"
            onClick={onCreate}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
