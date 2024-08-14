
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import Courses from './pages/Courses'
import Footer from './pages/Footer'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    
     <Home />   
    <Courses />
    <Footer />
    {/* <Navbar /> */}
    {/* <About /> */}
    </>
  )
}

export default App
