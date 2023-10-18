import React from 'react';
import AboutCSS from "./About.module.css";

export const About = () => {
  return (
    <div className={AboutCSS.about}>

      {/* text */}

      <h1>About Us</h1>

      <div className={AboutCSS.upperPart}>
        
        <div className={AboutCSS.upperText}>

          <h2>My name is Marly Mårquez,</h2> 
          <p>I consider myself a spiritual traveler and, although I always loved to
travel, since 2011 when I began my practice of Tibetan Buddhism, travel became an important part
of my spiritual development.
In each place, in addition to connecting with the culture, I was connecting with a network of
spiritual friends from various traditions, and thus, Siddharte was born as a way to share the
wisdom of that network that has enriched me so much.
</p>

<div>
  <img src="" alt="error" />
</div>

<p>Through his creativity, the artist manages to transcend the everyday and transports us to a realm
where words become insufficient. Art becomes a universal language that touches the most
intimate fibers of our being, uniting us as humanity.
Spirituality, for its part, invites us to explore our relationship with the transcendental, the divine or
the sacred. It goes beyond religious beliefs and delves into the search for deeper purpose and
meaning in our lives. It leads us to reflect on our place in the universe and connect with a reality
beyond the tangible.
When art and spirituality converge, a symphony of transcendental experiences is created.</p>

        </div>

        <div className={AboutCSS.upperImg}>
          <img src="https://w0.peakpx.com/wallpaper/150/875/HD-wallpaper-buddha-spiritual.jpg" alt="" />
        </div>
      </div>
      
    </div>
  )
}
