import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  
  const toggle = element => {
    element.preventDefault();
    setDarkMode(!darkMode)
    console.log(darkMode)
  }
  return(
    <nav className="navbar">
      <h1>Lots of Athletes</h1>
        <div>
          <div onClick={toggle}
          className={darkMode ? 'toggle toggled' : 'toggle'}>
            toggle dark mode
            </div>
        </div>
    </nav>
  )}

export default NavBar