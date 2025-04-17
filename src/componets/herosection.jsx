import './mystyle.css'

import React, { useState } from 'react';
import boyimge from '../assets/boyimge.png'


import Repeat from './repeat';
let Herosction = () =>{

    const images = [
        { src: "https://i.pinimg.com/736x/de/0d/47/de0d47d39588a28cd7188ea9480b9780.jpg", title: "Appetizers" },
        { src: "https://i.pinimg.com/736x/05/eb/8e/05eb8eca32c0246940cc314345552506.jpg", title: "Breakfast" },
        { src: "https://i.pinimg.com/736x/15/d8/96/15d89697b47603215d1e7c56e8db4c15.jpg", title: "Soup" },
        { src: "https://i.pinimg.com/736x/2a/2a/82/2a2a829d707118e12aa31e9751c969d4.jpg", title: "Dinner" },
        { src: "https://i.pinimg.com/736x/73/4b/ae/734baee310585a7b65305e3761224b4b.jpg", title: "Dessert" },
        { src: "https://i.pinimg.com/736x/6c/2d/fd/6c2dfd2dfdaaa8897780e7651c8585ed.jpg", title: "Drinks" },
        { src: "https://i.pinimg.com/736x/76/e6/fa/76e6fa2fbe7b259aa9a3b0b197a29cce.jpg", title: "Fruits" },
        { src: "https://i.pinimg.com/736x/03/59/d8/0359d8bea1a42de7399604f00713aa3c.jpg", title: "Fast Food" }
      ];
    
      const [startIndex, setStartIndex] = useState(0);
      const itemsPerSlide = 4;
    
      const nextSlide = () => {
        setStartIndex((prevIndex) =>
          prevIndex + itemsPerSlide >= images.length ? 0 : prevIndex + itemsPerSlide
        );
      };
    
      const prevSlide = () => {
        setStartIndex((prevIndex) =>
          prevIndex - itemsPerSlide < 0 ? images.length - itemsPerSlide : prevIndex - itemsPerSlide
        );
      };
    
      const currentImages = images.slice(startIndex, startIndex + itemsPerSlide);
    return(
        <>
 
 <div className='heromain'>

    <div className='imge'>

    </div>

 <div className='paraparent'>
    <h1 className='boldfont'>  Welcome to <span className='span1'>YummySaga</span></h1>
 <p className='mypara'>Welcome to Sweet Slice, where we turn your celebrations into sweet memories. From birthdays to weddings, we create cakes that are not only beautiful but also incredibly delicious. With the finest ingredients and creative designs, every cake is made to make your special moments even more unforgettable.</p>

 <button type="button" class="btn hoverbtn orderbtn">Order Now </button>
 </div>
   

</div>

{/* slider */}
<h1 className="heading">Explore More</h1>
      <div className="slider-container">
        <div className="slider-wrapper">
          {currentImages.map((img, idx) => (
            <div className="slider-card" key={idx}>
              <img src={img.src} alt={img.title} />
              <p>{img.title}</p>
            </div>
          ))}
        </div>

        <div className="buttons">
          <button onClick={prevSlide}>↩</button>
          <button onClick={nextSlide}>↪</button>
        </div>
      </div>

<Repeat/>

<h1 className='pt-4 colorore'> <i class="fa-solid fa-location-dot"></i> Vist Any Our Loction</h1>

<div className="ordernowsection">


<img className='boyimage' src={boyimge} alt="" />


<div className="paradiv">
  <ul className='textindent'>
    <h2 className='pt-3'> Location Name:</h2>
    <li>Alden Bridge </li>
        <li> <h4>Address:</h4></li>
        <li>
8000 Research Forest  Dr Suite 340
 </li>


<li> The Woodlands, TX 77382</li>

<li><h4>Time:</h4></li>
<li>Hours of Operation:</li>
<li>Sun–Thu: 11:00am – 9:00pm</li>
<li>Fri–Sat: 11:00am – 10:00pm </li>

<li><h4>Phone:</h4></li>

<li>832-585-0989</li>

  </ul>
</div>

<img className='mapimg' src="https://i.pinimg.com/736x/03/33/64/033364440dbaef7d3ba27f5622cdb4d0.jpg" alt="" />

</div>



{/* Most Top resipes section */}


<div className="mosttopbox">
  <h1 className="heading-center">Top Recipes</h1>

  <div className="card-container">
    {/* Card 1 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <img src="https://i.pinimg.com/736x/6a/cc/f3/6accf3cefbe7f9779d151e3696018990.jpg" alt="Biryani" />
        </div>
        <div className="flip-back">
          <h4>Biryani</h4>
          <p>Biryani is a rich and aromatic rice dish made with tender meat or vegetables and a blend of traditional spices.
Each layer is full of flavor, making it a festive favorite across South Asia.
Served hot with raita or salad, it's a true comfort meal.</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <img src="https://i.pinimg.com/736x/c4/20/66/c4206679d3e2df8ba861f8f89e9bca7d.jpg" alt="Butter Chicken Pasta" />
        </div>
        <div className="flip-back">
          <h5>Creamy Butter Chicken Pasta</h5>
          <p>This creamy butter chicken pasta is a fusion of Indian spices and Italian comfort.
Juicy chicken pieces in a buttery, spiced sauce tossed with soft pasta.
It’s cheesy, flavorful, and perfect for weeknight dinners or special occasions.</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <img src="https://i.pinimg.com/736x/38/d8/a4/38d8a41d088c7bbe39cea9d5bfbd8c08.jpg" alt="Egg Fried Rice" />
        </div>
        <div className="flip-back">
          <h5>Egg Fried Rice</h5>
          <p>Egg Fried Rice is a quick stir-fry dish made with cooked rice, scrambled eggs, and colorful veggies.
It’s tossed in soy sauce and spices for a savory taste.
Light yet satisfying, it’s great for lunch, dinner, or even leftovers.</p>
        </div>
      </div>
    </div>
  </div>
</div>






{/* section 6 */}
<section class="gallery-section">
  <div class="image-grid">
    <img src="https://i.pinimg.com/736x/24/8f/c1/248fc12c903cf6c7cd170b35f236fcd7.jpg" alt="Pizza" class="img1" />
    <img src="https://i.pinimg.com/736x/de/ec/cd/deeccd64b9a9738812882feecfe1def4.jpg" alt="Noodles" class="img2" />
    <img src="https://i.pinimg.com/736x/e1/fc/d2/e1fcd212882d655effc4a4a99b28854d.jpg" alt="Burger" class="img3" />
    <img src="https://i.pinimg.com/736x/73/7e/d9/737ed93987aae98a76fc2e5f12fc0ecc.jpg" alt="Fries" class="img4" />
  </div>
  <div class="gallery-text">
    <h4>Our Delicious Gallery</h4>
    <p>
      Explore the taste with our delicious food gallery. We serve the best quality meals that satisfy your cravings and fill your soul.
    </p>
   


    <div class="buttons">
   
      <button class="btn secondary">Contact Us</button>
    </div>
  </div>
</section>


        </>
       
    )
}

export default Herosction









