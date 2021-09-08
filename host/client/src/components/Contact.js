import React, {useState,useEffect}from 'react';
import { IoPersonCircleSharp} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import {ImMobile} from "react-icons/im";
import {VscSettings} from "react-icons/vsc";
import "../layouts/css/contact.css"
import emailjs from "emailjs-com";
const Contact=()=> {
  const [userData,setUserData]=useState({});
  const callAboutPage=async ()=>{
   try{
  
     const res = await fetch('/getData',{
       method:"GET",
       headers:{
         
         "Content-Type":"application/json"

       }
      
     });
     const data=await res.json();
     if(!res.status===200){
     
       throw new Error(res.error);
     }
     setUserData(data);
   }
   catch(error){
     
   }
  }
  
  
  useEffect(()=>{
    callAboutPage();
  },[]);

  const sendEmail=(e)=>{
    e.preventDefault();
    
    console.log(e.target);
    emailjs.send('service_6182awz','template_m3oblof', userData,'user_IRjLYkTWqs54wIQqeoUbQ')
     .then((result) => {
         window.alert("We will get back to you shortly...");
         e.target.reset();
      
     }, (error) => {
         window.alert("OOPS...try again later or send a mail to notepadx@xxx.com");
         console.log(error.text);
     });
   
  }
  return (
    <div >
       <div className="content">
    
    <div className="container">
      <div className="row align-items-stretch no-gutters contact-wrap">
        <div className="col-md-8">
          <div className="form h-100">
            <h3>For any query or suggestion contact us..</h3>
            <form className="mb-5" method="POST" id="contactForm" name="contactForm" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 form-group mb-5" >
                  <label for="#name" ><IoPersonCircleSharp size="1.5em" /></label>
                  <input type="text" value={userData.name} className="form-control lbl" name="name" id="name" placeholder="Your name" required/> 
                </div>
                <div className="col-md-6 form-group mb-5">
                <label for="#email" ><MdEmail size="1.5em" /></label>
                  <input type="text" value={userData.email} className="form-control lbl" name="email" id="email"  placeholder="Your email" required/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 form-group mb-5">
                <label for="#phone" ><ImMobile size="1.5em" /></label>
                  <input type="text" value={userData.phone} className="form-control lbl" name="phone" id="phone"  placeholder="Phone number" required/>
                </div>
                <div className="col-md-6 form-group mb-5">
                <label for="#name" ><VscSettings size="1.5em" /></label>
                  <input type="text" value={userData.work} className="form-control lbl" name="work" id="company"  placeholder="Category" required/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 form-group mb-5">
                  
                  <textarea className="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4"/>
                  <span className="submitting"></span>
                </div>
              </div>
            </form>

          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-info h-100">
            <h3>Contact Information</h3>
            <p className="mb-5">"We want to build technology that everybody loves using, and that affects everyone.</p>
            <ul className="list-unstyled">
              <li className="d-flex">
                <span className="wrap-icon icon-room mr-3"></span>
                <span className="text">147, Greem Valley National Park, Indore 452010</span>
              </li>
              <li className="d-flex">
                <span className="wrap-icon icon-phone mr-3"></span>
                <span className="text">+91-7000017105</span>
              </li>
              <li className="d-flex">
                <span className="wrap-icon icon-envelope mr-3"></span>
                <span className="text">satin@hackinversion.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
    
    

    </div>
  );
}
export default Contact;