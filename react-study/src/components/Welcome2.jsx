// react 17以后可以不用引入React
// import React from 'react'

// import './Welcome.css'
/* import './Welcome.scss'

export default function Welcome() {
  return (
    <div className='Welcome'>
      <div className="box">
        Welcome
      </div>
      <div className="box2">
        Welcome
      </div>
    </div>
  )
} */

// import style from './Welcome.module.css'
/* import style from './Welcome.module.scss'

export default function Welcome() {
  return (
    <div className='Welcome'>
      <div className={style.box}>
        Welcome
      </div>
      <div className={style.box2}>
        Welcome
      </div>
    </div>
  )
} */

/* import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
  background: red;
`;

export default function Welcome() {
  return (
    <div>
      {<Title>我是一个标题</Title>}
    </div>
  )
} */

import './Welcome.css'
import classnames from 'classnames'

console.log('welcome2');

/**
 * 欢迎组件
 * 一个简单的React函数组件，用于展示欢迎信息
 */
export default function Welcome() {
  // 定义一个CSS类名字符串，用于标题元素的样式
  // const myClass = 'box box2'
  const myClass = classnames({
    box: true,
    box2: false
  })
  return (
    <div className='Welcome'>
      <h2 className={myClass}>这是另一个标题</h2>
    </div>
  )
}