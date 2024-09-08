import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[100%]'>
    <Header/>
    <Home/>
    <About/>
    <Products/>
    <Testimonials/>
    <Footer/>
    </div>
      
    </>
  )
}

export default App
