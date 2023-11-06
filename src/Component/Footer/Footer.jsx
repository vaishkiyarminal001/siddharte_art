import React, { useContext, useState } from 'react';
import FooterCSS from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';



export const Footer = () => {

    const navigate = useNavigate();
   




  return (

    <div className={FooterCSS.footer}>

        <h2>Marly Mårquez | Spiritual Traveler & Founder of Siddharte</h2>
        <p>A fusion of art and spirituality creating transcendental experiences.<br/> Join me on a journey exploring cultures, connecting with a network of spiritual friends,<br/> and sharing the wisdom that enriches our lives.</p>
        
        <div className={FooterCSS.footSeconf}>
            <p onClick={() => {navigate("/")}}>   Home</p>
            <p onClick={() => {navigate("/gallery")}}>   Gallery</p>
            <p onClick={() => {navigate("/about")}}>   About</p>
            <p onClick={() => {navigate("/contact")}}>   Contact</p>
            <p onClick={() => {navigate("/service")}}>   Services</p>
        </div>

        <div className={FooterCSS.footIcon}>
    <div>
        <a style={{ color: 'white' }}  href="https://www.facebook.com/profile.php?id=100093478957091&mibextid=LQQJ4d">
          
            <FacebookIcon/>
        </a>
    </div>
    <div>
        <a style={{ color: 'white' }}  href="https://instagram.com/siddharte8?ipshid=YTQwZjQONm\OOA%3P%3P&utm source=qr">
            
            <InstagramIcon/>
        </a>
    </div>
    <div>
        <a style={{ color: 'white' }}  href="https://www.youtube.com/yourPage">
          
            <YouTubeIcon/>
        </a>
    </div>
</div>

        <div className={FooterCSS.CreatedBy}>
          <h3>Created By :- KalyanTech ❤️</h3>
        </div>


        



    </div>
  )
}