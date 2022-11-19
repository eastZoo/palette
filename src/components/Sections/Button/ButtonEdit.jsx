import React, { useState } from "react";

const ButtonEdit = (props) => {
  const [value ,setValue] = useState({
    backgroundColor: "",
    color: "",
    border: "10px",
    borderRadius: "10px",
    padding: "10px",
    margin:"10px",
  });

  const onChangeHandler = (e) => {
    setValue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };


  return (
    <>
      <div>
        <a>backgroundColor</a>
        <div className="color-palette">
          <input
            type="text"
            name="backgroundColor"
            className="color-palette__input"
            placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div>
        <a>color</a>
        <div className="color-palette">
          <input
            type="text"
            name="color"
            className="color-palette__input"
            placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div>
        <a>border</a>
        <div className="color-palette">
          <input
            type="text"
            name="border"
            className="color-palette__input"
            placeholder="10px, 10%, 10vh..."
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div>
        <a>borderRadius</a>
        <div className="color-palette">
          <input
            type="text"
            name="borderRadius"
            className="color-palette__input"
            placeholder="10px, 10%, 10vh..."
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div>
        <a>padding</a>
        <div className="color-palette">
          <input
            type="text"
            name="padding"
            className="color-palette__input"
            placeholder="10px, 10%, 10vh..."
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div>
        <a>margin</a>
        <div className="color-palette">
          <input
            type="text"
            name="margin"
            className="color-palette__input"
            placeholder="10px, 10%, 10vh..."
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit" className="color-palette__btn">
            Save
          </button>
      </div>
      {/* <div>
        <a>textAlign</a>
        <div className="color-palette">
          <input
            type="text"
            className="color-palette__input"
            placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
          />
          <button type="submit" className="color-palette__btn">
            Save
          </button>
        </div>
      </div>
      <div>
        <a>textDecoration</a>
        <div className="color-palette">
          <input
            type="text"
            className="color-palette__input"
            placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
          />
          <button type="submit" className="color-palette__btn">
            Save
          </button>
        </div>
      </div>
      <div>
        <a>display</a>
        <div className="color-palette">
          <input
            type="text"
            className="color-palette__input"
            placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
          />
          <button type="submit" className="color-palette__btn">
            Save
          </button>
        </div>
      </div>
      <div>
        <a>fontSize</a>
        <div className="color-palette">
          <input
            type="text"
            className="color-palette__input"
            placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
          />
          <button type="submit" className="color-palette__btn">
            Save
          </button>
        </div>
      </div>
      <div>
        <a>cursor</a>
        <div className="color-palette">
          <input
            type="text"
            className="color-palette__input"
            placeholder="i.e. #ffffff, rgb(255, 255, 255), rgba(255,  255, 255, .1)..."
          />
          <button type="submit" className="color-palette__btn">
            Save
          </button>
        </div>
      </div> */}
    </>
  );
};

export default ButtonEdit;
