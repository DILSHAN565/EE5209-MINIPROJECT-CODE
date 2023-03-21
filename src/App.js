import React from 'react'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'

import Venues from './pages/Venues'
import Menu from './pages/Menu'
import offers from './pages/Offers'
import Offers from './pages/Offers'

import { Route, Routes} from 'react-router-dom'

function App() {
 

  return (
    <>
  <Navbar/>
  <div className='container'>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/venues' element={<Venues/>} />
      <Route path='/offers' element={<Offers/>} />



    </Routes>

    


  </div>




  </>
  )
  
}

export default App
