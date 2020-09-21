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
              <Switch>
                 <Route  path="/" exact render={()=> <Redirect to="/signUp" />}></Route>
                 <Route path="/signIn" exact component={Main} />
                 <Route path="/signUp" exact component={SignIn} />      
            </Switch>
	   </BrowserRouter>
    </div>
    
  );
}

export default App;


