import React from 'react'
import HomeCSS from "./Home.module.css";
import Typewriter from 'typewriter-effect';

import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Final from "./Final.mp4"
// import smoke from "./smoke.mp4"
import drum1 from "./drum1.jpg";
import drum2 from "./drum2.jpg";
import drum3 from "./drum3.jpg";
import drum4 from "./drum4.jpg";

import ins1 from "./l1.jpg";
import ins2 from "./l2.jpg";
import ins3 from "./l3.jpg";
import ins4 from "./l4.jpg";





export const Home = () => {
  
  
 const navigate = useNavigate();
  
  
  
  return (
    <div className={HomeCSS.home}>
     
      {/* text animation */}


      <div className={HomeCSS.bannerText}>

        <h1>
          <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 200,
            strings: ["SIDDHARTE"]
           }}
          />
        </h1>

      </div>



    

      {/* video */}

      {/* <div className={HomeCSS.video}>

     <video width="100%" controls autoPlay loop>
    <source src={Final} type="video/mp4" />
   </video>

      </div> */}

      <div className={HomeCSS.ExploringText}>
        <h2>Exploring art as a communication from the heart.<br/>Art for healing, growth and spiritual practice
        </h2>

      </div>


      <div className={HomeCSS.DrumPart}>
        <h2><u>Drums</u></h2>

        <div className={HomeCSS.DrumImage}>
          <img src={drum1} alt="drum1" />
          <img src={drum2} alt="drum2" />
          <img src={drum3} alt="drum3" />
          <img src={drum4} alt="drum4" />
        </div>



      </div>


      <div className={HomeCSS.ManyInstrument}>
        <h2><u>Many More Instrument</u></h2>

        <div className={HomeCSS.ManyInstrumentImg}>

          <img src={ins1} alt="l1"/>
          <img src={ins2} alt="l2"/>
          <img src={ins3} alt="l3"/>
          <img src={ins4} alt="l3"/>         
        </div>


        <div className={HomeCSS.InstrumentBtn}>
        <button className={HomeCSS.Btntext} onClick={() => navigate("/gallery")}>Explore More <span><ArrowForwardIosIcon/></span></button>

        </div>





      </div>








    </div>
  );
}
