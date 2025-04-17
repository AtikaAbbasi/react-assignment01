import { NavLink } from 'react-router-dom'
import './mystyle.css'

let CompnentA  = () =>{
    return(
        <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink rel="stylesheet" href="" className="navbar-brand abc" to="/"><img className='logoimg' src="https://i.pinimg.com/736x/5b/49/e1/5b49e1474d3e2eb282c125b5af1885b3.jpg" alt="" /> </NavLink>
    <button className="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto gap-3">
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "orange nav-link" : " abc nav-link"}  aria-current="page" to="/Home">Home</NavLink>
        </li>
     
        <li className="nav-item">
        <NavLink className={({isActive}) => isActive ? "orange nav-link" : "abc nav-link"}  aria-current="page" to="/aboutus">About</NavLink>
        </li>


        <li className="nav-item">
        <NavLink className={({isActive}) => isActive ? "orange nav-link" : "abc nav-link"}  aria-current="page" to="/menu">Menu</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
        </>
       
    )
}

export default CompnentA