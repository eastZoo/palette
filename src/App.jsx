import { useRef, useState } from "react";
import "./App.scss";
import ButtonSection from "./components/ButtonSection";
import InputSection from "./components/InputSection";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import ColorPalette from "./components/test/ColorPalette";

function App() {
  const nextId = useRef(1);
  const [section, setSection] = useState("Button");
  const [buttonInputs, setButtonInputs] = useState({
    text: "button",
  });

  // main컴포넌트에 넘어갈 요소들
  const [styles, setstyles] = useState([]);
  const {
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
    type,
  } = buttonInputs;

  console.log(buttonInputs);

  const onChange = (e) => {
    const { name, value } = e.target;
    setButtonInputs({
      ...buttonInputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const style = {
      id: nextId.current,
      text,
      backgroundColor,
      color,
      border,
      borderRadius: `${borderRadius}px`,
      padding,
      margin: `${margin}px`,
      fontSize: `${fontSize}px`,
      cursor,
      height: `${height}px`,
      width: `${width}px`,
      type: section,
    };
    setstyles(styles.concat(style));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setstyles(styles.filter((user) => user.id !== id));
  };

  const sectionHandler = (menu) => {
    setSection(menu);
  };
  return (
    <div className="App">
      {/* <ColorPalette/> */}
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
            {section === "Button" && (
              <ButtonSection
                text={text}
                backgroundColor={backgroundColor}
                color={color}
                border={border}
                borderRadius={borderRadius}
                padding={padding}
                margin={margin}
                fontSize={fontSize}
                cursor={cursor}
                height={height}
                width={width}
                onChange={onChange}
                onCreate={onCreate}
              />
            )}
            {section === "Input" && <InputSection />}
          </div>
          {/* 오른쪽 메인 팔레트 */}
          <div className="main-container">
            <Main styles={styles} onRemove={onRemove}/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
