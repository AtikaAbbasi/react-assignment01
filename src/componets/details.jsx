
import React from 'react'
import Repeat from './repeat'
import { useState , useEffect } from 'react';
 import { useParams} from "react-router-dom"


const Details = () => {

    let  { id } = useParams();
    let  [recipe, setRecipe] = useState({})


    useEffect(() => {
     
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(res => setRecipe(res)
            );
            
    }, [])


return (
<>


<div className='heromain'>

<div className='paraparent'>
<h1 className='boldfont'>  Welcome to <span className='span1'>YummySaga</span></h1>
<p className='mypara'> Welcome to Sweet Slice, where every recipe brings a smile. From quick desserts to elegant bakes, we share recipes that add sweetness to your everyday moments. Using simple ingredients and creative ideas, each recipe is crafted to inspire joy in your kitchen.</p>

<button type="button" class="btn hoverbtn">Order Now </button>
</div>

<div className='imge'>

</div>

</div>

<div className="detail-main">

<h1 className='text-center text-warning pb-5 '>Recipe Detail </h1>
  <div className="recipe-body">
            <img className='detailimge'  src={recipe?.image} alt="" />
            <div className="recipe-inner mb-0">
                <h1 >{recipe?.name}</h1>
              
                        <p>{recipe?.ingredients}<br/> </p>
                <p className='parabold'>{recipe?.instructions}</p>
            </div>
    </div>

    </div>




    <Repeat/>


{/* gallery */}


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


{/*  */}



</>
)
}

export default Details