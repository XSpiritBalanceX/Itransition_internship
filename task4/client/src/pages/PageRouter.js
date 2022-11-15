import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import PageMain from './PageMain';
import PageAuth from './PageAuth';
import PageRegistr from './PageRegistr'
import PageUsers from "./PageUsers";

const PageRouter =()=>{

    const isAuth=true;

    return(
        <Routes>
            <Route path="/" element={<PageMain/>}/>                        
            <Route path="/login" element={<PageAuth/>}/>
            <Route path="/registration" element={<PageRegistr />}/>
            {isAuth && <Route path="/users" element={<PageUsers/>}/>}
            <Route path="*" element={<Navigate to ={'/'}/>}/>
        </Routes>
    )

}

export default PageRouter;
