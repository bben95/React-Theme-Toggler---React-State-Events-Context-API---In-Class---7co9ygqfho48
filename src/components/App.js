import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={isDarkMode?{backgroundColor:"rgb(0, 0, 0)"}:{backgroundColor:"rgb(255, 255, 255)"}} id="main">
      <h1 style={isDarkMode?{color:"rgb(255, 255, 255)"}:{color:"rgb(0, 0, 0)"}}>{isDarkMode? "Light Mode Activated":"Dark Mode Activated"}</h1>
      <button style={isDarkMode?{backgroundColor:"rgb(255, 255, 255)"}:{}} onClick={()=>{setIsDarkMode(!isDarkMode)}}>{isDarkMode?"Switch to Dark Mode":"Switch to Light Mode"}</button>
    </div>
  )
}


export default App;
