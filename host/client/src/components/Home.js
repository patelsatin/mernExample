import React,{useEffect,useState} from 'react';
import "../layouts/css/home.css"
import Pricing from './Pricing';
import { NavLink } from 'react-router-dom';
const Home=()=> {
  const [userData,setUserData]=useState({});
  const [show,setShow]=useState(false);
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
     setShow(true);
   }
   catch(error){
     
   }
  }
  
  
  useEffect(()=>{
    callAboutPage();
  },[]);
  return (
    <div>
   <header className="w3-container   w3-center" style={{padding:"150px 16px",height:"100%"}}>
    <h1 className="w3-margin w3-jumbo w3-hover-text-blue" >{show ? <span>Hi, {userData.name}</span> :'Welcome User'}</h1>
    <p className="w3-xlarge">{show ? 'Happy to see you back..' :'The beautiful thing about learning is that nobody can take it away from you.'}</p>
   <NavLink to="/portfolio"> <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">Go to courses</button></NavLink>
  </header>
<div className="container bdy">
<div className="section-heading text-center pri wow fadeInUp" data-wow-delay="0.2s" >
              
              <h3>Popular Technology</h3>
          
            
            </div>
    <div className="row">
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Web Development</h6>
                    <h2 className="text-right"><i className="fa fa-html5 f-left"></i><span>4.86</span></h2>
                    <p className="m-b-0">MERN,MEAN development<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
                <div className="card-block">
                    <h6 className="m-b-20">System Design</h6>
                    <h2 className="text-right"><i className="fa fa-desktop  f-left"></i><span>4.50</span></h2>
                    <p className="m-b-0">High/Low level Design<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Android App</h6>
                    <h2 className="text-right"><i className="fa fa-android f-left"></i><span>3.66</span></h2>
                    <p className="m-b-0">RNative,Kotlin, Java<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Machine Learning</h6>
                    <h2 className="text-right"><i className="fa fa-cogs f-left"></i><span>5.26</span></h2>
                    <p className="m-b-0">R, Ruby, Python, AutoML<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
       
       
	</div>
</div>
 <Pricing />
  
  
  <footer className="w3-container w3-padding-64 w3-black w3-center ">  
    <div className="w3-xlarge w3-padding-32">
      <i className="fa fa-facebook-official w3-hover-opacity"></i>
      <i className="fa fa-instagram w3-hover-opacity"></i>
      <i className="fa fa-snapchat w3-hover-opacity"></i>
      <i className="fa fa-pinterest-p w3-hover-opacity"></i>
      <i className="fa fa-twitter w3-hover-opacity"></i>
      <i className="fa fa-linkedin w3-hover-opacity"></i>
   </div>
   <p>Designed by <a href="https://www.linkedin.com/in/satin-patel-07967a150/" target="_blank">satin patel</a></p>
  </footer>
  </div>
  
  
 
 
  );
}

export default Home;