import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { themeContext } from "./context/themeContext.js";
const Layout = () => {

    const[theme ,setTheme] = useState('light');

    const themetoggler = () =>{
        setTheme((prevTheme) => prevTheme === 'light'?'dark':'light');
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove('light','dark');
        document.querySelector('html').classList.add(theme);
    },[theme])
    
    return(
        <themeContext.Provider value={{theme , themetoggler}}>
            <Header/>
            <Outlet></Outlet>
        </themeContext.Provider>
    )
}


export default Layout;