import React from "react"
import CanvasModel from './canvas/index'
import Home from './pages/Home'
import Customizer from './pages/Customizer'

function App() {

  return (
   
      <main className="app transition-all ease-in"> 
       <Home/>
       <CanvasModel/>
       <Customizer/>
       
      </main>
   
    
  )
}

export default App
