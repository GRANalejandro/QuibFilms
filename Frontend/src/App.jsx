import './App.css'
import Inicio from './layout/login'
import Preference from './layout/preference'
import Registro from './components/Registro/Registro'
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div>
      <Routes>
      <Route path="/" Component={Inicio} />
      <Route path="/Registro" Component={Registro}/>
      <Route path='/Preferencias' Component={Preference}/>
      </Routes>
    </div>
  )
}

export default App
