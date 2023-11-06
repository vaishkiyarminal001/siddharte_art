import React, { useEffect, useState } from 'react';
import GalleryCSS from "./Gallery.module.css";
import { useNavigate } from 'react-router-dom';

export const Gallery = () => {


  const [state, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() =>{
    DisplayDid();
  });

  const DisplayDid = async () =>{

    const res = await fetch('http://localhost:8080/instrument');
    const data = await res.json();
    // state(data);
    console.log(data);
    setState(data);

  }


// hello


  return (
    <div className={GalleryCSS.gallery}>

      <div className={GalleryCSS.displayCard}>
        {
          state.map((e) =>{
            
            return(
              <div key={e.id} className={GalleryCSS.card}> 

            <img src={e.image} alt='error' style={{ width: '350px', height: '350px' }}/>
            <h2>{e.title}</h2>
            <button onClick={() => navigate(`singleproduct/${e.id}`)} className={GalleryCSS.Btn}>See More</button>
            
            
            </div>
            )
            
           })
        }
      </div>






    </div>
  )
}
