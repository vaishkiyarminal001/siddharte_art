import React from 'react'
import HomeCSS from "./Home.module.css";
import {useTypewriter, Cursor} from 'react-simple-typewriter';





export const Home = () => {
 
  const {text} = useTypewriter({
    words: ['SIDDHARTE', 'ARTE'],
    loop: {},
  });
  
  
  
  
  return (
    <div>
        {/* text animation */}

        <div className={HomeCSS.text}>
          <h1 style={{margin: '50px'}}>
            Welcome to
            <span style={{fontWeight: 'bold', color: '#043642'}}>{text}</span>
            <Cursor/>
          </h1>
        </div>



        {/* video */}

        <div className={HomeCSS.video}>

        </div>





    </div>
  )
}
