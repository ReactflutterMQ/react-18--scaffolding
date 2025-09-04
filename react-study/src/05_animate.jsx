import React, { useRef, useState } from 'react'
import './05_animate.scss'
import { CSSTransition } from 'react-transition-group'

export default function App() {
  const [ prop, setProp ] = useState(true)
  const nodeRef = useRef(null)
  const handleClick = () => {
    setProp(!prop)
  }
  const handleEntered = () => {//入场结束后触发
    console.log('entered');
  }
  return (
    <div className='Animate'>
        <h2>hello animate</h2>
        <button onClick={handleClick}>点击</button>
        <CSSTransition appear in={prop} nodeRef={nodeRef} timeout={1000} unmountOnExit onEntered={handleEntered} classNames="fade">
            <div className="box" ref={nodeRef}></div>
        </CSSTransition>
    </div>
  )
}
