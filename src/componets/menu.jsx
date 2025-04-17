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
<p className='mypara'>Welcome to Sweet Slice, where every recipe brings a smile. From quick desserts to elegant bakes, we share recipes that add sweetness to your everyday moments. Using simple ingredients and creative ideas, each recipe is crafted to inspire joy in your kitchen.</p>

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