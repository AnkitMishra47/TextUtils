

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";


function App() {

const [darkMode, setdarkMode] = useState('light') ;
const [alert, setalert] = useState(null);

const showAlert = (message , type)=>{
setalert({
  msg : message ,
  type : type 
})

setTimeout(() => {
  setalert(null);
}, 1500);
}

const ToggleMode = ()=>{
  if(darkMode === 'light'){
    setdarkMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode has been enabled", "success");
  }
  else{
    setdarkMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled", "success");
  }
}

  return (
    <>
  
      <Navbar title="Text Utilities For You" About="About Us" mode ={darkMode} toggleMode={ToggleMode}/>
      <Alert myalert = {alert} />
      <div className="container my-3">
     <TextForm showAlert = {showAlert} mode={darkMode}/>
    
     
      </div>
  
    </>
  );
}

export default App;
