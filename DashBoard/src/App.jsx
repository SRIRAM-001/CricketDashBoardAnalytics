import React from 'react'
import Home from './Components/Home'
import Batsman from './Components/Batsman'
import { Route, Routes } from 'react-router-dom'
import Allrouder from './Components/Allrouder'
import Pitch from './Components/Pitch'
import Bowler from './Components/Bowler'

import Sideebar from './Components/Sideebar'


function App() {
  return (
    <div >
      
      <Sideebar>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/batsman' element={<Batsman/>}/>
              <Route path='/bowler' element={<Bowler/>}/>
              <Route path='/allrounder' element={<Allrouder/>}/>
              <Route path='/pitch' element={<Pitch/>}/>
          </Routes>
      </Sideebar>
      
    </div>
  )
}

export default App
