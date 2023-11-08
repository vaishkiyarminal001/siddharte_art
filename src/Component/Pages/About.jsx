import React from 'react';
import AboutCSS from "./About.module.css";
import marly from "../../assets/marly.jpeg"
// import { MyAuthContext } from '../Context/MyAuthContext';
// import { useContext } from 'react';

export const About = () => {


  // const {lang} = useContext(MyAuthContext);


//   if(!lang){
//     return (
//       <div className={AboutCSS.about}>
  
//         {/* text */}
  
//         <h1>About Us</h1>
  
//         <div className={AboutCSS.upperPart}>
  
//         <div className={AboutCSS.upperImg}>
//             <img src="https://w0.peakpx.com/wallpaper/150/875/HD-wallpaper-buddha-spiritual.jpg" alt="" />
//           </div>
          
//           <div className={AboutCSS.upperText}>
  
//             <h2>Me llamo Marly Mårquez,</h2> 
//             <p>me considero una viajera espiritual y, aunque siempre me encantö
// viajar, desde el 2011 que inicié mi pråctica de budismo tibetano, los viajes se volvieron una parte
// importante de mi desarrollo espiritual.
// En cada lugar, ademås de conectar con la cultura, iba conectando con una red de amigos
// espirituales de diversas tradiciones, y asi, naci6 Siddharte como una forma de compartir la
// sabiduria de esa red que a mi me ha enriquecido tanto.
//   </p>
  
//   <div>
//     <img src="" alt="error" />
//   </div>
  
//   <p>A través de su creatividad, el artista, logra trascender Io cotidiano y nos transporta a un reino
// donde las palabras se vuelven insuficientes. El arte se convierte en un lenguaje universal que toca
// las fibras mås intimas de nuestro ser, uniéndonos como humanidad.
// La espiritualidad, por su parte, nos invita a explorar nuestra relaciån con Io trascendental, Io divino
// o Io sagrado. Va mås allå de las creencias religiosas y se adentra en la büsqueda de un prop6sito y
// un significado mås profundo en nuestras vidas. Nos Ileva a reflexionar sobre nuestro lugar en el
// universo y a conectarnos con una realidad mås allå de Io tangible.
// Cuando eI arte y Ia espiritualidad convergen, se crea una sinfonia de experiencias trascendentales.</p>
  
//           </div>
  
          
//         </div>
        
//       </div>
//     )
//   }



  return (
    <div className={AboutCSS.about}>

      {/* text */}

      <h1>About Us</h1>

      <div className={AboutCSS.upperPart}>

      <div className={AboutCSS.upperImg}>
          <img src="https://w0.peakpx.com/wallpaper/150/875/HD-wallpaper-buddha-spiritual.jpg" alt="" />
        </div>
        
        <div className={AboutCSS.upperText}>

          <h2>My name is Marly Mårquez,</h2> 
          <div className={AboutCSS.marlyImg}>
  <img src={marly} alt="error" />
</div>
          <p>I consider myself a spiritual traveler and, although I always loved to
travel, since 2011 when I began my practice of Tibetan Buddhism, travel became an important part
of my spiritual development.
In each place, in addition to connecting with the culture, I was connecting with a network of
spiritual friends from various traditions, and thus, Siddharte was born as a way to share the
wisdom of that network that has enriched me so much.
</p>

<p>Through his creativity, the artist manages to transcend the everyday and transports us to a realm
where words become insufficient. Art becomes a universal language that touches the most
intimate fibers of our being, uniting us as humanity.
Spirituality, for its part, invites us to explore our relationship with the transcendental, the divine or
the sacred. It goes beyond religious beliefs and delves into the search for deeper purpose and
meaning in our lives. It leads us to reflect on our place in the universe and connect with a reality
beyond the tangible.
When art and spirituality converge, a symphony of transcendental experiences is created.</p>

        </div>

        
      </div>
      
    </div>
  )
}
