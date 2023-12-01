import './App.css'
import Inicio from './layout/login'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" Component={Inicio} />
      </Routes>
    </div>
  )
}

export default App
