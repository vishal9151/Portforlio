import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
      </Router>
     
    </>
  )
}

export default App
