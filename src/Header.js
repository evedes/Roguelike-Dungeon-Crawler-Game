import React from 'react'
import './Header.css'
import fcclogo from './img/freeCodeCamp.jpg'

const Header = () =>{
    return(
        <div className="header">
            <img className="logo" src={fcclogo} alt="freecodecamp logo" />
            <p className="hfont1">A Roguelike Dungeon Crawler Game</p>
            <p className="hfont2">5th React Challenge</p>
        </div>
    )
}

export default Header
  