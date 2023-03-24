import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div style={isDarkMode?{backgroundColor:"rgb(255, 255, 255)"}:{backgroundColor:"rgb(0, 0, 0)"}} id="main">
      <h1 style={isDarkMode?{color:"rgb(0, 0, 0)"}:{color:"rgb(255, 255, 255)"}}>{isDarkMode? "Light Mode Activated":"Dark Mode Activated"}</h1>
      <button style={isDarkMode?{}:{backgroundColor:"rgb(255, 255, 255)"}} onClick={()=>{setIsDarkMode(!isDarkMode)}}>{isDarkMode?"Switch to Dark Mode":"Switch to Light Mode"}</button>
    </div>
  )
}


export default App;
