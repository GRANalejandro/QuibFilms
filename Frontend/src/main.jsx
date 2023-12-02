import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from '../src/components/main/main-footer.jsx'
import '../src/scss/theme.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>,
)
