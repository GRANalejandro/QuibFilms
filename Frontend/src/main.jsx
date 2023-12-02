import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< Updated upstream
import '../src/scss/theme.scss';
import Footer from '../src/components/main/main-footer.jsx'
=======
import Footer from '../src/components/main/main-footer.jsx'
import '../src/scss/theme.scss'
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
<<<<<<< Updated upstream
    <Footer />
=======
    <Footer/>
>>>>>>> Stashed changes
  </React.StrictMode>,
)
