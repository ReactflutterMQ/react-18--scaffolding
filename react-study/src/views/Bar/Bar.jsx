import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function Bar() {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const location = useLocation()
  // console.log('location', location);
  console.log('searchParams', searchParams.get('username'));//拿到url参数中键名为username的值

  const handleClick = () => {
    // console.log({ gender: 'male' });
    setSearchParams({ gender: 'male' })
  }

  return (
    <div onClick={handleClick}>Bar</div>
  )
}
