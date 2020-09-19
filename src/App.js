import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import Header from"./Header/header"
import Main from"./Main/main"
import SignIn from"./SignIn/SignIn"


import './App.css';

function App() {
  return (
   <div className="App">
   <BrowserRouter>
     <Header />
     <Main />
     
	  
	 
      <Route path ='/signIn'component={SignIn}/>
	</BrowserRouter>
    </div>
    
  );
}

export default App;


