import React from 'react'
import './mystyle.css'
import CompnentA from './componetA'
import Herosction from './herosection'
import Footer from './footer'

import { Route, Routes } from 'react-router-dom'

import About from './aboutus'
import Recipes from './menu'

import Details from './details'
import NotFound from './Notfoundpage'

const Main = () => {
  return (
  <> 
   <CompnentA/>
  <Routes>
    <Route path='/home' element={ <Herosction/>}/>
    <Route path='/' element={ <Herosction/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/menu' element={<Recipes/>}/>
    <Route path='/recipes/:id' element={<Details/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>

<Footer/>
 
     
 
  

  </>
  )
}

export default Main