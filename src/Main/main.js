import React, {Component,useState } from 'react'
import "./main.css"
import padlock from "../Image/padlock.png"
import{Link}from "react-router-dom"

import {Sign,Name,Surname,Mail,Password,Checkbox,Button,Display}from "../SignUp/StyledComponent/sign.js"
//import { render } from '@testing-library/react'

export default class Main extends Component {

    state={
        mail:"Your Mail ",
        password: "Password",
        border:""    
    }
    
    saveEmail = (event) => {
        this.setState({
            mail:event.target.value,
            //border:"4px solid green",            
        })
    }
    savePassword = (event) => {
        this.setState({
            password:event.target.value,
            ///border:"4px solid green",      
        })
    }

    CheckData = () => {
        if (
          this.state.mail === localStorage.getItem("mail") &&
          this.state.password === localStorage.getItem("password")
        ) {
          alert("true");
        } else {
          alert("false");
        }
      };


    render() {
        return (
            <div className="wrapperIn">
                 <div className="display">
                      <img src={padlock} alt="lock"className="lockPng"/> 
                      <p className="signIn">Sign in</p>  
                      <input type="mail"
                           className="mailIn"
                           placeholder={this.state.mail}
                           style={{border:this.state.border}}
                           onChange={this.saveEmail} >    
                       </input>
                      <input type="password"
                           className="passwordIn"
                           style={{border:this.state.border}} 
                           placeholder={this.state.password}
                           onChange={this.savePassword}>                         
                       </input>
                      <input type="checkbox"className="checkboxIn"></input>
                      <p className="wantIn">Remember me</p>
                      <button className ="btnIn"onClick={this.CheckData}>Sign in</button>
                      <p className="forgotIn">Forgot password?</p>
                      <Link to ="/signUp" className= "hrefIn"onClick={this.showBlock}>Dont have an account? Sign up </Link>
                     <p className="footerIn">Copyright © Your Website 2020.</p>
                </div>
                <span></span>
          </div>
        )
    }
}
















    