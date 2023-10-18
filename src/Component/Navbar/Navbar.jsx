import React, { useState } from 'react';
import NavbarCSS from "./Navbar.module.css";
import {Link, Link as RouterLink} from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Services } from '../Pages/Services';
import { Contact } from '../Pages/Contact';
import { Gallery } from '../Pages/Gallery';
import logo from "./Logo 2.png";

export const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);


    let myLink = [
        {
            title: "Home",
            path:"/"
        },


        {
            title: "About",
            path:"/about"
        },


        {
            title: "Gallery",
            path:"/gallery"
        },


        {
            title: "Services",
            path:"/service"
        },


        {
            title: "Contact",
            path:"/contact"
        },
    ]




  return (
    <>
    <nav className= {`${NavbarCSS['main-nav']}`}>
      
        {/* logo */}

        <div className= {NavbarCSS.logo}>
        <RouterLink to="/">
        <img src={logo} alt="Logo" /></RouterLink>
        </div>

     {/* navbar links */}

     <div className={`${NavbarCSS['menu-link']} ${showMediaIcons ? NavbarCSS['mobile-menu-link'] : ''}`}>


    <ul>
       {myLink.map((link) => (
       <li key={link.path}>
       <Link to={link.path}>{link.title}</Link>
       </li>
  ))}
</ul>
        </div>



        {/* social media links */}

        <div className= {`${NavbarCSS['social-media']}`}>
            <ul className={`${NavbarCSS['social-media-desktop']}`}>
                <li>
                    <a href='https://www.frcebook.corn/profile.php?id=100093478957091 & mibextid=LQQJ4d'/><FaFacebook className={NavbarCSS.facebook}/>
                    
                </li>

                <li>
                    <a href="https://instagram.com/siddharte8?igshid=YTQwZjQONmlOOA%3D%3D&utm source-qr"/><FaInstagram className={NavbarCSS.instagram}/>
                    
                </li>

                <li>
                    <a href='https://www.youtube.com/@marly_marquez'/><FaYoutube className={NavbarCSS.youtube}/>
                    
                </li>
            </ul>

           

            {/* hamburger menu */}
        
        <div className= {`${NavbarCSS['hamburger-menu']}`}>

           <a href='#' onClick={() => setShowMediaIcons (!showMediaIcons)}><GiHamburgerMenu/></a>
        </div>

        
        </div>

        
    </nav>




    </>
  )
}
