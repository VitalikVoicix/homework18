import React from 'react';
import {HashRouter,Route,Switch,Redirect} from "react-router-dom"
import Header from"./Header/header"
import Main from"./Main/main"
import SignIn from"./SignIn/SignIn"


import './App.css';

function App() {
  return (
   
    <div className="App">
     <HashRouter> 
            <Header />
            <Main />
              <Switch>
              <Route  path="/" exact render={()=> <Redirect to="/signIn" />}/>
                 <Route path="/signUp" exact component={Main} />
                 <Route path="/signIn" exact component={SignIn} />      
	             </Switch>
     </HashRouter> 
     </div>
  
  );
}

export default App;


