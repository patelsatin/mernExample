import React,{useContext} from 'react';
import '../layouts/css/style.css'
import ur from "../layouts/images/123.jpg";
import { MdEmail } from "react-icons/md";
import {SocialIcon} from "react-social-icons";
import {FaLock} from "react-icons/fa";
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from "../App";
const Login=()=> {
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const {state,dispatch} =useContext(UserContext);
    const history=useHistory();
    const signIn=async (e)=>{
     
        e.preventDefault();
        const res=await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });

        const data= await res.json();
        
        if(res.status === 400 || !data){
            window.alert("invalid Credentials");
        }
        else{
            dispatch({type:"USER",payload:true});
            history.push("/");
        }
    }
  return (
   
        <section className="sign-in">
    <div className="container">
        <div className="signin-content">
            <div className="signin-image ">
                <figure className="img_hide"><img src={ur} alt="sing up image" id="imge"/></figure>
                <NavLink to="/signup" className="signup-image-link">Create new account-</NavLink>
            </div>

            <div className="signin-form">
                <h2 className="form-title">Sign in</h2>
                <form method="POST" className="register-form" id="login-form">
                    <div className="form-group">
                        <label htmlFor="email"><MdEmail /></label>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="your_name" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passowrd"><FaLock /></label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="your_pass" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                        <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" onClick={signIn} name="signin" id="signin" className="form-submit" value="Log in"/>
                    </div>
                </form>
                <div className="social-login">
                    <span className="social-label">Or login with</span>
                    <ul className="socials">
                        <li><SocialIcon network="facebook" style={{ height: 35, width: 35 }} /></li>
                        <li><SocialIcon network="google" style={{ height: 45, width: 45 }} /></li>
                        <li><SocialIcon network="linkedin" style={{ height: 35, width: 35 }} /></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
    
   
  );
}
export default Login;