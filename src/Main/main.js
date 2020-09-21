import React, { Component } from 'react'
import "./main.css"
import padlock from "./padlock.png"
import{NavLink}from "react-router-dom"
//import SignIn from "../SignIn/SignIn"
import {Sign,Name,Surname,Mail,Password,Checkbox,Button,Display}from "./StyledComponent/sign.js"

export default class Main extends Component {
    state={
        showSignIn:false,
        mail:"Your Mail ",
        password: "Password",
        name:"First Name *",
        surname:"Last Name*",
        border:""
    }
    
    saveEmail = (event) => {
        this.setState({
            mail:event.target.value,
            border:"4px solid blue"
        })
    }
    savePassword = (event) => {
        this.setState({
            password:event.target.value,
            border:"4px solid blue",
        })
    }

    saveName = (event) => {
        this.setState({
            name:event.target.value,
            border:"4px solid blue",
        })
    }

    saveSurname = (event) => {
        this.setState({
            surname:event.target.value,
            border:"4px solid blue",

        })
    }


    render() {
        return (
            <div className="wrapper">
               <Display>
                <img src={padlock} alt="lock"className="lockPng"/> 
                <Sign >Sign up</Sign >
                <Name 
                     type ="text"
                     style={{border:this.state.border}}
                     placeholder={this.state.name}
                     onChange={this.saveName}>
                </Name>
                <Surname 
                    type="text"
                    style={{border:this.state.border}}
                    placeholder={this.state.surname}
                    onChange={this.saveSurname}>                
                 </Surname>
                <Mail 
                     style={{border:this.state.border}} 
                     placeholder={this.state.mail} 
                     type="mail"
                    onChange={this.saveEmail} >  
                </Mail>
                <Password 
                     style={{border:this.state.border}}
                     type="password"
                     placeholder={this.state.password}
                     onChange={this.savePassword}>
                 </Password>
                <Checkbox type="checkbox"></Checkbox>
                      <p className="wantUp">I want to receive inspiration marketing via mail</p>
               <Button>Sign up</Button>
                <div className="href">
                     <NavLink to ="/signUp" >Already have an account? Sign in</NavLink>
                </div> 
                   <p className="footer">Copyright © Your Website 2020.</p>
                <div>
                    <span></span>
               </div>
               </Display>
           </div>
       )
    }
}