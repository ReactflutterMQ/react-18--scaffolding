import React, { useState } from 'react'
import './Foo.scss'
// import { useParams } from 'react-router-dom'
import store from '../../store'

export default function Foo() {
  const [count, setCount] = useState(store.getState().count)
  // const params = useParams()  
  const handleClick = () => {
    store.dispatch({ type: 'inc' })
  }
  store.subscribe(() => {
    // console.log('subscribe');
    setCount(store.getState().count)
  }) //订阅redux的状态变化，组件重新渲染

  return (
    // <div>Foo, {params.id}</div>
    <div style={{marginTop: '20px'}}>
      <button onClick={handleClick}>修改state值</button>
      <div>Foo, { count }</div>
    </div>
  )
}
