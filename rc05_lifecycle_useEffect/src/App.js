import React from 'react'
import { useState } from 'react'
import UseEffectComp from './components/UseEffectComp'
import Users from './components/Users';
import UseStateComp from './components/UseStateComp'

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      {/* <UseStateComp/> */}
      {/* {isVisible &&< UseEffectComp/>} */}
      {/* <button onClick={()=>setIsVisible(!isVisible)}>Toggle Comp.</button> */}
      <Users/>
    </div>
  )
}

export default App
