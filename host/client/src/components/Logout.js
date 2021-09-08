import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../App";

const Logout=()=>{
    const history=useHistory();
   const {state,dispatch} =useContext(UserContext);
  const logout=async ()=>{
   try{
  
     const res = await fetch('/logout',{
       method:"GET",
       headers:{
          Accept:"application/json",
         "Content-Type":"application/json"

       },
       credentials:"include"
     });
     if(res.status===201){
        dispatch({type:"USER",payload:false}); 
        history.push("/login");
     }
    
   }
   catch(error){
   console.log(error);
   }
  }
 useEffect(()=>{
 logout();

 },[]);
    return(
        <></>
    );
}

export default Logout;