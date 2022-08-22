import React from 'react'
import './App.scss'
import NavHeader from './components/SideNav'

function App () {
  return (
    <div className="App">
      <NavHeader />
      <div className='outerWrapper'>
        <div className='innerWrapper'>
          <header id='home' className='home'>
            <p className='title'>hola mundo efown oeifnw ionewof newofin en fweof nweoi nfewoif newoi nfeowin foewn foew nfewoin</p>
          </header>
        </div>
      </div>
    </div>
  )
}

export default App
