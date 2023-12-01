import { useState } from 'react'
import './App.css'
import Login from './layout/login'
import Preference from './layout/preference'
import RoutePrivate from './routerPrivate/routerPrivate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
