

import { NavLink } from 'react-router-dom'


const button = ({id}) => {
  return (
   <>
   
   <NavLink to={`/recipes/${id}`} className="btn hoverbtn">
      View Detail 
      
      </NavLink>
   
   
   </>

   
  )
}

export default button