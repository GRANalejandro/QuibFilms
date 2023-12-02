import { useState } from 'react'
import './App.css'

import Preference from './layout/preference'
import MainLayout from './layout/main-layout'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout/>
    </>
  )
}

export default App
