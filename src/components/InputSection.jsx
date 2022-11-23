import React, { useRef, useState } from "react";
import "../styles/InputSection.scss";
const InputSection = ({
  text,
  backgroundColor,
  color,
  border,
  borderRadius,
  padding,
  margin,
  fontSize,
  cursor,
  height,
  width,
  onChange,
  onCreate,
}) => {

  return (
    <>
      {/* 컬러 설정 */}
      <div className="side-wrapper">
        <div class="side-title">Color</div>
        <div class="side-menu">
          <div className="side-content">
            <a>backgroundColor</a>
            <div className="search-bar">
              <input
                type="color"
                name="backgroundColor"
                className="search-bar__input"
                placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
                onChange={onChange}
                value={backgroundColor}
              />
            </div>
          </div>
          <div className="side-content">
            <a>color</a>
            <div className="search-bar">
              <input
                type="color"
                name="color"
                className="search-bar__input"
                placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
                onChange={onChange}
                value={color}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 보더 설정 */}
      <div className="side-wrapper">
        <div class="side-title">Border</div>
        <div class="side-menu">
          <div className="side-content">
            <a>border</a>
            <div className="search-bar">
              <input
                type="text"
                name="border"
                placeholder="solid, 1px solid black..."
                className="search-bar__input"
                onChange={onChange}
                value={border}
              />
            </div>
          </div>
          <div className="side-content">
            <a>borderRadius : {borderRadius}px</a>
            <div className="search-bar">
              <input
                type="range"
                name="borderRadius"
                min="0"
                max="30"
                className="search-bar__input"
                placeholder="10px, 10%, 10vh..."
                onChange={onChange}
                value={borderRadius || 0}
              />
              <input
                type="text"
                name="borderRadius"
                className="search-bar__input"
                placeholder="16px"
                onChange={onChange}
                value={borderRadius}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 버튼 사이즈 설정 */}
      <div className="side-wrapper">
        <div class="side-title">Size</div>
        <div class="side-menu">
          <div className="side-content">
            <a>padding</a>
            <div className="search-bar">
              <input
                type="text"
                name="padding"
                placeholder="solid, 1px solid black..."
                className="search-bar__input"
                onChange={onChange}
                value={padding}
              />
            </div>
          </div>
          {/* <div className="side-content">
            <a>width : {width}px</a>
            <div className="search-bar">
              <input
                type="range"
                name="width"
                min="0"
                max="700"
                className="search-bar__input"
                placeholder="10px, 10%, 10vh..."
                onChange={onChange}
                value={width || 0}
              />
            </div>
          </div>
          <div className="side-content">
            <a>height : {height}px</a>
            <div className="search-bar">
              <input
                type="range"
                name="height"
                min="0"
                max="700"
                placeholder="solid, 1px solid black..."
                className="search-bar__input"
                onChange={onChange}
                value={height || 0}
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* 나머지 */}
      <div className="side-wrapper">
        <div class="side-title">Other</div>
        <div class="side-menu">
          <div className="side-content">
            <a>cursor</a>
            <div className="search-bar">
              <input
                type="text"
                name="cursor"
                id="cursor"
                placeholder="pointer,zoom-in,wait,crosshair.."
                className="search-bar__input"
                onChange={onChange}
                value={cursor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputSection;
