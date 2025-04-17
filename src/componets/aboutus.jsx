import React from 'react'
import { NavLink } from 'react-router-dom'
import Repeat from './repeat'
const Aboutus = () => {
  return (
    <>

    
    <div>
      <section className="about-hero">
        <h1>  <span className='span1'>About</span> us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="about-images">
          <img src="https://i.pinimg.com/736x/bb/80/bc/bb80bcfce98d5b54942b892f967a34d4.jpg" alt="team work" />
          <img src="https://i.pinimg.com/736x/c4/a8/1e/c4a81e68dcb301f9baf906b1ae749eb1.jpg" alt="presentation" />
          <img src="https://i.pinimg.com/736x/6a/7a/15/6a7a150b675aeb0ed2b1995aa74ceb25.jpg" alt="meeting" />
          <img src="https://i.pinimg.com/736x/4b/f6/1f/4bf61f7bec0d6e6d35644df9f76e210e.jpg" alt="discussion" />
        </div>
      </section>

      <section className="idea-section">
        <h1>Our Story Behind Every Flover</h1>
        <div className="idea-content">
          
          <p>
          Every great recipe has a story, and ours begins with a love for delicious food and the joy of sharing it. From humble beginnings to a passion-driven journey, our kitchen has always been a space of creativity, warmth, and tradition. Each ingredient is chosen with care, and every dish is made with the same love we would serve to our own family.
          </p>
          <p>
          Whether you're here for a quick treat or a deep dive into culinary magic, our recipes are designed to bring flavor, comfort, and inspiration to your table. We believe in keeping things simple, authentic, and full of heart — because good food brings people together, and every bite should feel like home.
          </p>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-video">
          <img src="https://i.pinimg.com/736x/d8/76/85/d8768525cbe4a5131cd77bf0b11065b2.jpg" alt="Founder" />
          <div className="caption">
            
            <br />
            <span>Aleena </span>
          </div>
        </div>
        <div className="founder-text">
          <h2>Recipes Made with Love</h2>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <blockquote>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </blockquote>
        </div>
      </section>

      <Repeat/>
      <section className="grow-section">
        <h2>We help bussiness to grow faster and bigger</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="grow-features">
          <div className="feature">
            <img src="https://i.pinimg.com/736x/8a/e8/75/8ae875daa645757213877e08a6006851.jpg" alt="icon" />
            <h3>Professional Team</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <img src="https://i.pinimg.com/736x/24/50/89/24508915eeb9d38ea4090e643201afd5.jpg" alt="icon" />
            <h3>Target Oriented</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <img src="https://i.pinimg.com/736x/77/92/d8/7792d8be6f9b3a32e980d4c4178436c2.jpg" alt="icon" />
            <h3>Success Guarantee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    </div>
   


    </> 
  )
}

export default Aboutus