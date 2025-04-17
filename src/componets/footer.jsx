import React from 'react'

const footer = () => {
  return (
   <>
   
   <footer className= "footer">
  <div className= "footer-top">
  <div className= "logo">
  <span className= "yummy">Yummy</span><span className= "saga">Saga</span>
</div>
<p >This website is your go-to place for everything tasty! Discover mouth-watering recipes, explore the best foods, and enjoy a journey of flavors that delight your taste buds.
From quick snacks to gourmet meals, we’ve got something delicious for every craving!</p>
    <hr />
   
  </div>

  <div className= "footer-bottom">
    <h6> © Copyright : Atika Aabasi</h6>
    {/* <div className= "social-icons">
      <a href="#"><i className= "fab fa-facebook-f"></i></a>
      <a href="#"><i className= "fab fa-instagram"></i></a>
      <a href="#"><i className= "fab fa-twitter"></i></a>
      <a href="#"><i className= "fab fa-youtube"></i></a>
    </div> */}


<div className="social-icons">
  <a href="#"><i className="fab fa-facebook-f"></i></a>
  <a href="#"><i className="fab fa-instagram"></i></a>
  <a href="#"><i className="fab fa-twitter"></i></a>
  <a href="#"><i className="fab fa-youtube"></i></a>
</div>

  </div>
</footer>

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>



   </>
  )
}

export default footer