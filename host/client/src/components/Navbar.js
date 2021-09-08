import React, { useContext, useEffect, useState } from 'react';
import { FcDoughnutChart } from "react-icons/fc";
import {NavLink} from 'react-router-dom';
import { UserContext } from '../App';
const Navbar=()=> {
  const {state,dispatch}=useContext(UserContext);
  const [msg,setMsg]=useState("Hi");
  const RenderMenu=()=>{
   if(state){
     return (
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <NavLink className="nav-link"  to="/" >Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link"  to="/portfolio" >Courses</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/about">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/contact">Contact us</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/logout">Logout</NavLink>
    </li>
   
  </ul>)
   }
   else{
     return (
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <NavLink className="nav-link"  to="/" >Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link"  to="/portfolio" >Courses</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/about">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/contact">Contact us</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/signup">Registration</NavLink>
    </li>
   
   
  </ul>
     )
   }

  }

  useEffect(()=>{
    setMsg("hi 2")
  },[]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      <FcDoughnutChart size="2em" /><span id="flg">Hack-</span><span id="dblg">Inversion</span></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
      </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <RenderMenu />
    </div>
  </div>
</nav>  );
}
export default Navbar;