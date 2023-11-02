import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Services } from '../Pages/Services'
import { Contact } from '../Pages/Contact'
import { Gallery } from '../Pages/Gallery'

export const Allroute = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>

        </Routes>



    </div>
  )
}
