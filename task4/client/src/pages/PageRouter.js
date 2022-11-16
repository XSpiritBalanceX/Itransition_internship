import React from "react";
import { useState, useEffect } from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import PageMain from './PageMain';
import PageAuth from './PageAuth';
import PageRegistr from './PageRegistr'
import PageUsers from "./PageUsers";

const PageRouter =()=>{
    const [isAuth, setAuth]=useState(false);
    setTimeout(() => fetch('http://localhost:5000/api/user/auth')
    .then(res=>res.json())
    .then(data=>console.log(data)), 6000)
   /* useEffect(()=>{
        fetch('http://localhost:5000/api/user/auth')
      .then(res=>res.json())
      .then(data=>console.log(data))
      },[]);  */

    

    return(
        <Routes>
            <Route path="/" element={<PageMain/>}/>                        
            <Route path="/login" element={<PageAuth/>}/>
            <Route path="/registration" element={<PageRegistr />}/>
            {isAuth && <Route path="/users" element={<PageUsers/>}/>}
            <Route path="*" element={<Navigate to ={'/login'}/>}/>
        </Routes>
    )

}

export default PageRouter;
