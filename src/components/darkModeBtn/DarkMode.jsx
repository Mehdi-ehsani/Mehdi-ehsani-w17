import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";

import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
       document.querySelector("body").setAttribute("data-theme" , "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme" , "light")
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
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
