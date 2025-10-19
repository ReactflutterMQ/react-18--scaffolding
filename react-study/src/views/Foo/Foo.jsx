import React, { useState } from 'react'
import './Foo.scss'
// import { useParams } from 'react-router-dom'
import store from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { handleAsyncMessageAction } from '../../store/modules/message'

export default function Foo() {
  // const [count, setCount] = useState(store.getState().count)
  // const params = useParams()
  const count = useSelector((state) => state.counter.count) //state.counter对应的是index.js中reducer的key
  const msg = useSelector((state) => state.message.msg)
  const doubleCount = useSelector((state) => state.counter.doubleCount)
  const upperMsg = useSelector((state) => state.message.upperMsg)
  const dispatch = useDispatch()
  const handleClick = () => {
    /* dispatch(handleAsyncMessageAction()).then(res => {
      console.log(res);
      dispatch({
        type: 'message/change',
        payload: res.payload
      })
    }) */

    dispatch(handleAsyncMessageAction())

    /* dispatch({
      type: 'counter/inc',
      payload: 5
    })
    dispatch({
      type: 'message/change',
      payload: 'hi'
    }) */
  }
  // store.subscribe(() => {
  //   // console.log('subscribe');
  //   setCount(store.getState().count)
  // }) //订阅redux的状态变化，组件重新渲染

  return (
    // <div>Foo, {params.id}</div>
    <div style={{ marginTop: '20px' }}>
      <button onClick={handleClick}>修改state值</button>
      <div>Foo, {count}, {doubleCount}, {msg}, {upperMsg}</div>
    </div>
  )
}
