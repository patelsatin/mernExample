import React,{useState} from 'react';
import "../layouts/css/style.css";
import sr from "../layouts/images/123.jpg"
import { SocialIcon } from 'react-social-icons';
import {IoPersonCircleSharp} from "react-icons/io5";
import {MdEmail,MdWork} from "react-icons/md";
import {ImMobile} from "react-icons/im";
import {FaLock,FaUserLock} from "react-icons/fa";
import {NavLink, useHistory} from "react-router-dom";
const Signup=()=> {
    const history=useHistory();
    const [user,setUser]=useState({
        name:"",email:"",phone:"",work:"",pass:"",re_pass:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name =e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    const submitDetails=async (e)=>{
         e.preventDefault();
         const { name,email,phone,work,pass,re_pass}=user;
         const res=await fetch("/register",{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
                 name,email,phone,work,password:pass,cpassword:re_pass
             })
         });

         const data= await res.json();
         if(res.status === 422 || !data){
             window.alert("Email already exist");
         }
         else{
             window.alert("registration Successfull");
             history.push("/login");
         }
    }
  return (
    <div >
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form" >
                            <div className="form-group">
                                <label htmlFor="name"><IoPersonCircleSharp size="1.5em"/></label>
                                <input value={user.name} onChange={handleInputs} type="text"  name="name" id="name" placeholder="Your Name" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><MdEmail size="1.5em"/></label>
                                <input value={user.email} onChange={handleInputs} type="email" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"><ImMobile size="1.5em"/></label>
                                <input value={user.phone} onChange={handleInputs} type="tel" pattern="[0-9]{10}" name="phone" id="phone" placeholder="Your Mobile Number" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="work"><MdWork size="1.5em"/></label>
                                <input value={user.work} onChange={handleInputs} type="work" name="work" id="work" placeholder="Your Profession" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><FaLock size="1.5em"/></label>
                                <input value={user.pass} onChange={handleInputs} type="password" name="pass" id="pass" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><FaUserLock size="1.5em"/></label>
                                <input value={user.re_pass} onChange={handleInputs} type="password" name="re_pass" id="re_pass" placeholder="Confirm your password" required/>
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" onClick={submitDetails} name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image ">
                        <figure classNameName="img_hide"><img src={sr} alt="sing up image" /></figure>
                        <NavLink to="/login" className="signup-image-link">Already have an acoount? Login Here..</NavLink>
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
    </div>
  );
}
export default Signup;