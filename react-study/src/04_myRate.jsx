import React, { useState } from 'react'
import MyRate from './MyAntd/MyRate/MyRate'

export default function App() {
  const [value, setValue] = useState(3)
  return (
    <div>
      <MyRate></MyRate>
      <MyRate count={5}></MyRate>
      <MyRate value={value} onChange={setValue}></MyRate>
      { value }
    </div>
  )
}

