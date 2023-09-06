import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App(){
  const[mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);  
  const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
   setAlert(null); 
  },1500);
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }
 
  const toggleMode=(cls)=>{
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark  mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
   
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }
  }
  return(
    <>
 <Router>
<Navbar title="Textutils2"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
            
          </Route>
        </Switch>
      
{/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}

{/* <About/> */}
</div>
</Router>
    </>
  );
}
export default App;