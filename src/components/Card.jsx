import React, { useState } from "react";
import copyText from "copy-text-to-clipboard";
import '../styles/Card.scss';

const Card = ({ style, onRemove, key, section }) => {
  const [copyMessage, setCopyMessage] = useState("Copy style");

  // 값이 들어가지 않은 속성들은 출력안되게하기
  const textStyles = `{
    ${style.backgroundColor===undefined ? "" :"background-color:"+style.backgroundColor+";"}
    ${style.color===undefined ? "" :"color:"+style.color+";"}
    ${style.border===undefined ? "" :"border:"+style.border+";"}
    ${style.borderRadius==="undefinedpx" ? "" :"border-radius:"+style.borderRadius+";"}
    ${style.padding===undefined ? "" :"padding:"+style.padding+";"}
    ${style.margin==="undefinedpx" ? "" :"margin:"+style.margin+";"}
    ${style.fontSize==="undefinedpx" ? "" :"font-size:"+style.fontSize+";"}
    ${style.cursor===undefined ? "" :"cursor:"+style.cursor+";"}
    ${style.height==="undefinedpx" ? "" :"height:"+style.height+";"}
    ${style.width==="undefinedpx" ? "" :"width:"+style.width+";"}
  }`;

  const copyStyle = () => {
    copyText(textStyles);
    setCopyMessage("Copyed!!");
    const tick = setTimeout(() => {
      setCopyMessage("Copy style");
    }, 1500);
    return () => clearTimeout(tick);
  };

  return (
    <div class="app-card" onClick={copyStyle} key={key}>
      <div className="app-card-title">
        <div>type</div>
        <div onClick={() => onRemove(style.id)}>Delete</div>
      </div>
      <div class="app-card-buttons">
        {style.type === "Button" && <button style={style}>{style.text}</button>}
        {style.type === "Input" && <input style={style} value={"text"}>{style.text}</input>}
        <div class="menu"></div>
      </div>
      <span>{copyMessage}</span>
    </div>
  );
};

export default Card;
