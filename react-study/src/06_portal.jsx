import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { CSSTransition } from 'react-transition-group'
import './06_portal.scss'

const message = {
    success(text) {
        const message = ReactDOM.createRoot(document.querySelector('#message'))
        message.render(<Message text={text} icon="✔" />)
    }
}
function Message(props) {
    const [ prop, setProp ] = useState(true)
    const nodeRef = useRef(null)
    const handleEntered = () => {
        setTimeout(() => {
            setProp(false)
        }, 2000);
    }
    return (
        <CSSTransition appear in={prop} nodeRef={nodeRef} timeout={1000} unmountOnExit onEntered={handleEntered} classNames="Message">
            <div className='Message' ref={nodeRef}>{props.icon} {props.text}</div>
        </CSSTransition>
    )
}

export default function App() {

  const handleClick = () => {
    message.success('登录成功')
  }
  return (
    <div>
        <h2>hello portal</h2>
        <button onClick={handleClick}>点击</button>
    </div>
  )
}
