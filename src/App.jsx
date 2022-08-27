import React from 'react'
import './App.scss'
import NavHeader from './components/SideNav'
import Footer from './components/Footer'
import Home from './components/Home'

function App () {
  return (
    <div className="App">
      <NavHeader />
      <div className='outerWrapper'>
        <div className='innerWrapper'>
          <Home />
        </div>
          <Footer />
      </div>
    </div>
  )
}

export default App
