import { useState } from "react";
import "./App.scss";
import ButtonSection from "./components/ButtonSection";
import InputSection from "./components/InputSection";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
  const [section, setSection] = useState("Button");
  const [style, setstyle] = useState([
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "royalblue",
      color: "blue",
      padding: "20px",
      border: "1px solid red"
    },
    {
      backgroundColor: "royalblue",
      color: "blue",
      padding: "20px",
      border: "1px solid red"
    },
    {
      backgroundColor: "royalblue",
      color: "blue",
      padding: "20px",
      border: "1px solid red"
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
    {
      backgroundColor: "orange",
      color: "blue",
      border: "20px",
      padding: "20px",
      cursor: " pointer",
    },
  ]);
  const sectionHandler = (menu) => {
    setSection(menu);
  };

  
  return (
    <div className="App">
      {/* 배경 비디오 */}
      <div class="video-bg">
        <video
          preload="auto"
          autoplay="true"
          loop="loop"
          muted="muted"
          volume="0"
        >
          <source
            src="https://assets.codepen.io/3364143/7btrrd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="main">
        <Header sectionHandler={sectionHandler} />
        <div className="wrapper">
          <div class="left-side">
            {section === "Button" && <ButtonSection />}
            {section === "Input" && <InputSection />}
          </div>
          {/* 오른쪽 메인 팔레트 */}
          <div className="main-container">
            <Main styles={style} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
