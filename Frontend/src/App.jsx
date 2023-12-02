import { useState } from 'react'
import './App.css'
import Main from './layout/main'
import Preference from './layout/preference'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Preference/>
    </>
  )
}

export default App
