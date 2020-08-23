import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginlogo from './static/images/loginpage.jpg';
import whatsapplogo from './static/images/whatsappheader.png'
import {provider} from './Firebase';
import * as firebase from 'firebase/app';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

export default function LoginForm() {
    const [{},dispatch]=useStateValue();
    
    const goToSignInWindow=(e)=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
          }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            alert(error.message);
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
                                <span className="signup__btn"><a href="#" onClick={(e)=>{goToSignInWindow(e)}}className="signUp__link">Sign Up</a> using google account</span>
                            
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}
