import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";

import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
       document.querySelector("body").setAttribute("data-theme" , "dark");
       localStorage.setItem("theme" , "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme" , "light");
       localStorage.setItem("theme" , "light")
     }
    const selectedTheme = localStorage.getItem("theme") || "light";
    if(selectedTheme === "dark") {
        setDarkMode()
    } 
    const toggleTheme = (e) => {
        e.target.checked ? setDarkMode() : setLightMode()
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
