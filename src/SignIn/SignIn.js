import React, { Component } from 'react'
import padlock from "../Main/padlock.png"
import "./SignIn.css"

export default class SignIn extends Component {

    state={
        mail:"Your Mail ",
        password: "Password",
        border:""    
    }
    
    saveEmail = (event) => {
        this.setState({
            mail:event.target.value,
            border:"4px solid blue",            
        })
    }
    savePassword = (event) => {
        this.setState({
            password:event.target.value,
            border:"4px solid blue",      
        })
    }

    render() {
        return (
            <div className="wrapperIn">
                 <div className="display">
                      <img src={padlock} alt="lock"className="lockPng"/> 
                      <p className="signIn">Sign in</p>  
                      <input type="mail"className="mailIn"placeholder={this.state.mail}style={{border:this.state.border}} onChange={this.saveEmail} ></input>
                      <input type="password"className="passwordIn" style={{border:this.state.border}} placeholder={this.state.password}onChange={this.savePassword}></input>
                      <input type="checkbox"className="checkboxIn"></input>
                      <p className="wantIn">Remember me</p>
                      <button className ="btnIn">Sign in</button>
                      <p className="forgotIn">Forgot password?</p>
                      <a className= "hrefIn" href="/signUp"onClick={this.showBlock}>Dont have an account? Sign up</a>
                     <p className="footerIn">Copyright © Your Website 2020.</p>
                </div>
          </div>
        )
    }
}
