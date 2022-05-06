import React from 'react'
import './Themes.css'
import { FaSun, FaMoon } from "react-icons/fa";

const Themes = ({DWmode, DarkLighToggle}) => {
  return (
    <div className={DWmode ? 'themeHeroDivDark' : 'themeHeroDivWhite'}>
        <div className="themeChildHero">
                <FaSun className={DWmode ? '' :  'activeTheme'} size={40}  onClick={() => DarkLighToggle('LightMode')} /> 
                <FaMoon size={40} className={DWmode ? 'activeTheme' : ''}  onClick={() => DarkLighToggle('DarkMode')} />
        </div>
    </div>
  )
}

export default Themes