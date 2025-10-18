import React, { useState } from 'react'
import './Foo.scss'
// import { useParams } from 'react-router-dom'
import store from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { handleCounterAction } from '../../store/modules/counter'

export default function Foo() {
  // const [count, setCount] = useState(store.getState().count)
  // const params = useParams()
  const count = useSelector((state) => state.counter.count)
  const doubleCount = useSelector((state) => state.counter.doubleCount)
  const msg = useSelector((state) => state.message.msg)
  const upperMsg = useSelector((state) => state.message.upperMsg)
  const dispatch = useDispatch()
  const handleClick = () => {
    // store.dispatch({ type: 'inc' })
    /* dispatch({ type: 'counter/inc', payload: 5 })
    dispatch({
      type: 'message/change',
      payload: 'hi'
    }) */
   dispatch(handleCounterAction()).then(res => {
    dispatch({ type: 'counter/inc', payload: 5 })
    console.log(res)
   })
  }
  // store.subscribe(() => {
  //   // console.log('subscribe');
  //   setCount(store.getState().count)
  // }) //订阅redux的状态变化，组件重新渲染

  return (
    // <div>Foo, {params.id}</div>
    <div style={{marginTop: '20px'}}>
      <button onClick={handleClick}>修改state值</button>
      <div>Foo, { count }, { doubleCount }, {msg}, {upperMsg}</div>
    </div>
  )
}
