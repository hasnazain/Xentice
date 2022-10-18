import React from 'react'
import'./advertise.css';
import {Link} from 'react-router-dom';

export default function Advertise() {
  return (
    <>
    <div className='advertise-container'>
        <nav className='advertise-nav'>
        <ul>
         <Link to="/pricing" >

          <i class="fa-solid fa-building-columns"></i>
          
          Commercialshop</Link>
          <Link to="/pricing"> <i class="fa-sharp fa-solid fa-building"></i>Builders</Link>
          <Link to="/about"><i class="fa-sharp fa-solid fa-building"></i>Architects</Link>
          <Link to="/pricing"><i class="fa-solid fa-building-columns"></i>Banking</Link>
          <Link to="/pricing"><i class="fa-regular fa-rings-wedding"></i>IT support</Link>
          <Link to="/about"><i class="fa-solid fa-building-columns"></i>Labourers</Link>
          <Link to="/pricing"><i class="fa-sharp fa-solid fa-building"></i>Mentors</Link>
          <Link to="/pricing"><i class="fa-solid fa-building-columns"></i>Advocates</Link>
          <Link to="/about"><i class="fa-sharp fa-solid fa-building"></i>Insurance</Link>
          <Link to="/pricing"><i class="fa-sharp fa-solid fa-building"></i>Lifestyle</Link>
          <Link to="/pricing"><i class="fa-solid fa-building-columns"></i>Xentic Mart</Link>
          <Link to="/about"><i class="fa-sharp fa-solid fa-building"></i>Eco Living</Link>
        </ul>
        </nav>
        {/* <div className='rows'> */}
        <div className='first-section'> 
        </div>
        
        <div className='second-section'>

        </div>
        {/* </div> */}
        </div>
    
        
</>
  )
}
