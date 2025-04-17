import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import Button from "../componets/button";

const Recipes = () => {

    const [recipes, setQuotes] = useState([])

    const fetQuores = async () => {
        try {
            const res = await fetch('https://dummyjson.com/recipes');
            const data = await res.json();

            setQuotes(data.recipes);
            //    setQuotes(data);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetQuores();
    }, [])

    return (
        <>

{/* herosrction */}

<div className='heromain boxchange'>


<div className='paraparent'>
<h1 className='boldfont'>  Welcome to <span className='span1'>YummySaga</span></h1>
<p className='mypara'>Welcome to Sweet Slice, where we turn your celebrations into sweet memories. From birthdays to weddings, we create cakes that are not only beautiful but also incredibly delicious. With the finest ingredients and creative designs, every cake is made to make your special moments even more unforgettable.</p>

<button type="button" class="btn hoverbtn">Order Now </button>
</div>


<div className='imge'>

</div>

</div>


<div className='parentbox'>
          {

            recipes.map((recipe, index)=>(
             
                 <div key={index+recipe.id} className="">
              
<div className="childbox">
<img className="imgee"  src={recipe?.image} alt="" />
<h3> {recipe?.name}</h3>
<br />

<Button id={recipe.id}/>

</div>


<br />
<br />
            </div>

           
            ))


          } 
{/* parentclos */}
</div>

        </>
    )
}

export default Recipes