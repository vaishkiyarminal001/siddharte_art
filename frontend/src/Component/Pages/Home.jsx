import React from 'react'
import HomeCSS from "./Home.module.css";
import Typewriter from 'typewriter-effect';






export const Home = () => {
  
  
 
  
  
  
  return (
    <div className={HomeCSS.home}>
     
      {/* text animation */}


      <div className={HomeCSS.bannerText}>
        {/* <h1>SIDDHARTE</h1> */}

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
      <div className={HomeCSS.video}>






      </div>
    </div>
  );
}
