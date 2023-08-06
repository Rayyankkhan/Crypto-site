import React, { useEffect, useState } from 'react'
import './darkmode.css'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const DarkMode = () => {
    const [theme, setTheme] = useState (null);

    useEffect (() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
        }
        else{
            setTheme ('light');
        }
    }, [])

    useEffect (() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme (theme === "light" ? "dark" : "light" );
    };
    const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <button className='dark:text-white text-black'  onClick={() => {  
        handleThemeSwitch();
        toggleTheme();
        }} >
           {isDarkMode ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
        
      {/* <label class="switch" onClick={handleThemeSwitch}>
      <input type="checkbox" onClick={handleThemeSwitch}/>
       <span class="slider round" onClick={handleThemeSwitch}></span>
        </label> */}
      </button>
    </>
  )
}

export default DarkMode
