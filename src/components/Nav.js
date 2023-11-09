import React, { useEffect, useState } from 'react';
import netflixLogo from '../Netflix_logo.svg';
import netflixAvatar from '../Netflix-avatar.png';
import './Nav.css';

function Nav(){
    const [showNav, setShowNav] = useState(false);
    useEffect(()=>{
        function onScrollHandler(){
            if(window.scrollY > 100){
                setShowNav(true);
            }
            else{
                setShowNav(false);
            }
        }
        window.addEventListener("scroll", onScrollHandler)

        return ()=> window.removeEventListener("scroll", onScrollHandler);
    },[])

    return <div className={`nav ${showNav && "nav--black"}`}>
        <img src={netflixLogo} className="nav__img" alt="Netflix Logo"/>
        <img src={netflixAvatar} className="nav__avatar" alt="Neflix Avatar"/>
    </div>
}

export default Nav;