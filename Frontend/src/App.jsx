import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Preference from './layout/preference'
import MainLayout from './layout/main-layout'
import Registro from './components/Registro/Registro'
import Inicio from './layout/login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
        <Route path="/" Component={MainLayout} />
        <Route path="/Registro" Component={Registro}/>
        <Route path="/Principal" Component={Inicio}/>
        <Route path='/Preferencias' Component={Preference}/>
        </Routes>
      </div>
      <Preference/>
    </>
  )
}

export default App
