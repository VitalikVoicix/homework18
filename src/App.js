import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
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
     <Switch>
        <Route path="/signIn">
          <SignIn />
        </Route>
      </Switch>
	</BrowserRouter>
    </div>
    
  );
}

export default App;


