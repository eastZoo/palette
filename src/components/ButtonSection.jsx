import React, { useRef, useState } from "react";
import '../styles/ButtonSection.scss'
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
  onChange,
  onCreate,
}) => {
  const preview = {
    text: text,
    backgroundColor:backgroundColor,
    color:color,
    border:border,
    borderRadius:`${borderRadius}px`,
    padding:`${padding}px`,
    margin:`${margin}px`,
    fontSize:`${fontSize}px`,
    cursor:cursor
  };
  console.log(preview)
  return (
    <>
      <div className="side-wrapper">
        <div class="side-title">ButtonSection</div>
        <div class="side-menu">
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <a>padding</a>
            <div className="color-palette">
              <input
                type="range"
                name="padding"
                className="color-palette__input"
                placeholder="10px, 10%, 10vh..."
                onChange={onChange}
                value={padding}
              />
              <span>{padding}px</span>
            </div>
          </div>
          <div>
            <a>margin</a>
            <div className="color-palette">
              <input
                type="range"
                name="margin"
                className="color-palette__input"
                placeholder="10px, 10%, 10vh..."
                onChange={onChange}
                value={margin}
              />
              <span>{margin}px</span>
            </div>
          </div>
          <div>
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
          <div>
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
          <button
            style={{ marginTop: "20px" }}
            type="submit"
            className="color-palette__btn"
            onClick={onCreate}
          >
            Save
          </button>
        </div>
      </div>
      <div className="preview">
        <div>PREVIEW</div>
        <button style={preview}>{preview.text}</button>
      </div>
    </>
  );
};

export default ButtonSection;
