import React from 'react'
import './App.css'
import Home from './Pages/Home'
import BsState from './Context/BsState'


const App = () => {
  return (
    <div className='App'>
      <BsState>
      <Home/>
      </BsState>
    </div>
  )
}

export default App
