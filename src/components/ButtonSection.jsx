import React, { useRef, useState } from "react";
import "../styles/ButtonSection.scss";
const ButtonSection = ({
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
  const preview = {
    text: text,
    backgroundColor: backgroundColor,
    color: color,
    border: border,
    borderRadius: `${borderRadius}px`,
    padding: `${padding}px`,
    margin: `${margin}px`,
    fontSize: `${fontSize}px`,
    cursor: cursor,
    height: `${height}px`,
    width: `${width}px`,
  };
  return (
    <>
      {/* 텍스트 조정 */}
      <div className="side-wrapper">
        <div class="side-title">Text</div>
        <div class="side-menu">
          <div className="side-content">
            <a>text</a>
            <div className="color-palette">
              <input
                type="text"
                name="text"
                className="color-palette__input"
                placeholder="input button text.."
                onChange={onChange}
                value={text}
              />
            </div>
          </div>
          <div className="side-content">
            <a>fontSize</a>
            <div className="color-palette">
              <input
                type="range"
                name="fontSize"
                className="color-palette__input"
                min="0"
                max="200"
                onChange={onChange}
                value={fontSize}
              />
              <span>{fontSize}px</span>
            </div>
          </div>
        </div>
      </div>
      {/* 컬러 설정 */}
      <div className="side-wrapper">
        <div class="side-title">Color</div>
        <div class="side-menu">
          <div className="side-content">
            <a>backgroundColor</a>
            <div className="color-palette">
              <input
                type="color"
                name="backgroundColor"
                className="color-palette__input"
                placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
                onChange={onChange}
                value={backgroundColor}
              />
            </div>
          </div>
          <div className="side-content">
            <a>color</a>
            <div className="color-palette">
              <input
                type="color"
                name="color"
                className="color-palette__input"
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
            <div className="color-palette">
              <input
                type="text"
                name="border"
                placeholder="solid, 1px solid black..."
                className="color-palette__input"
                onChange={onChange}
                value={border}
              />
            </div>
          </div>
          <div className="side-content">
            <a>borderRadius</a>
            <div className="color-palette">
              <input
                type="range"
                name="borderRadius"
                min="0"
                max="30"
                className="color-palette__input"
                placeholder="10px, 10%, 10vh..."
                onChange={onChange}
                value={borderRadius}
              />
              <span>{borderRadius}px</span>
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
            <div className="color-palette">
              <input
                type="text"
                name="padding"
                className="color-palette__input"
                placeholder="10px, 10%, 10vh..."
                onChange={onChange}
                value={padding}
              />
              <span>{padding}px</span>
            </div>
          </div>
        </div>
        <div class="side-menu">
          <div className="side-content">
            <a>width</a>
            <div className="color-palette">
              <input
                type="range"
                name="width"
                min="0"
                max="800"
                className="color-palette__input"
                placeholder="10px, 10%, 10vh..."
                onChange={onChange}
                value={width}
              />
              <span>{width}px</span>
            </div>
          </div>
        </div>
        <div class="side-menu">
          <div className="side-content">
            <a>height</a>
            <div className="color-palette">
              <input
                type="range"
                name="height"
                min="0"
                max="800"
                className="color-palette__input"
                placeholder="10px, 10%, 10vh..."
                onChange={onChange}
                value={height}
              />
              <span>{height}px</span>
            </div>
          </div>
        </div>
      </div>

      <div className="side-wrapper">
        <div class="side-title">Other</div>
        <div class="side-menu">
          <div className="side-content">
            <a>cursor</a>
            <div className="color-palette">
              <input
                type="radio"
                name="cursor"
                id="cursor"
                className="color-palette__input"
                onChange={onChange}
                value={cursor}
              />
              <label for="pointer">pointer</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          style={{ marginTop: "20px" }}
          type="submit"
          className="color-palette__btn"
          onClick={onCreate}
        >
          Save
        </button>
      </div>
      <div className="preview">
        <div>PREVIEW</div>
        <button style={preview}>{preview.text}</button>
      </div>
    </>
  );
};

export default ButtonSection;
