import React, {useState} from 'react'
import copyText from 'copy-text-to-clipboard'

const Card = ({style, onRemove, key}) => {
  const [ copyMessage, setCopyMessage ] = useState("Copy style")

  // 값이 들어가지 않은 속성들은 출력안되게하기
  const textStyles = `{
    background-color: ${style.backgroundColor};
    color: ${style.color};
    border: ${style.border};
    border-radius: ${style.borderRadius};
    padding: ${style.padding};
    margin: ${style.margin};
    font-size: ${style.fontSize};
    cursor: ${style.cursor};
    height: ${style.height},
    width: ${style.width},
  }`

  const copyStyle = () => {
    copyText(textStyles)
    setCopyMessage('Copied!!', () => {
        window.setTimeout(resetCopyMessage(), 1500)
      }
    )
  }

  const resetCopyMessage = () => {
    setCopyMessage('Copy hex code')
  }

  return (
    <div class="app-card" onClick={copyStyle} key={key}>
      <div className="app-card-title">
        <div>type</div>
        <div onClick={() => onRemove(style.id)}>Delete</div>
      </div>
      <div class="app-card-buttons">
        <button style={style}>{style.text}</button>
        <div class="menu"></div>
      </div>
      <span>{copyMessage}</span>
    </div>
  );
}

export default Card