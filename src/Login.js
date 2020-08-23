import React,{useState,useEffect} from 'react';
import './Login.css';
// import { auth } from './Firebase';
import {Button,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginlogo from './static/images/loginpage.jpg';
import whatsapplogo from './static/images/whatsappheader.png'
import {provider} from './Firebase';
import * as firebase from 'firebase/app';

export default function LoginForm({settingUserName}) {
    const [displayName,setDisplayName]=useState('');
    const[userName,setUserName]=useState("");
    const[emailID,setEmailID]=useState("");
    const[userPassword,setUserPassword]=useState("");
    const[user,setUser]=useState(null) //user initially set to null

    //everytime authentication is done (during login and logout), onAuthStateChanged is invoked and user is tracked and stored in user state
    
    //fired when a user signs up i.e creates an user name, id and password
    const onUserSignup=(e)=>{
        e.preventDefault(); //to prevent unusual behaviour and is a ust
        
    }

    //fired when a user signs in after creating an account
    const onUserSignIn=(e)=>{
        e.preventDefault();
        
    }

    const goToSignInWindow=(e)=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-1 col-md-5 " >
                    <div className="insta__post">
                        <img src={loginlogo}
                            alt="iphone"
                            className=" img-fluid image__landing"
                        /> 
                    </div>
                </div>
                <div className="col-10 col-md-5 signInSignUp" >
                    <div className="login__form">
                        <div className="user__input">
                                <img
                                    src={whatsapplogo} 
                                    alt='description'
                                    className='img-fluid login_formImg'
                                />
                            
                            <div className="email_password">
                                <FormControl
                                    placeholder="Email ID"
                                    name="emailID"
                                    value={emailID}
                                    className="email__id"
                                    onChange={(e)=>setEmailID(e.target.value)}
                                />
                                <FormControl
                                    placeholder="Password"
                                    name="userPassword"
                                    type="password"
                                    value={userPassword}
                                    onChange={(e)=>setUserPassword(e.target.value)}
                                />
                            </div>
                            <Button className="login__button" block={true} variant="primary" type="submit" onClick={(e)=>{onUserSignIn(e)}}>Log In</Button>
                            <span className="signup__btn">Don't have an account? <a href="#" onClick={(e)=>{goToSignInWindow()}}className="signUp__link">Sign Up</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
