import React from 'react'
import './middlebar.css';
import {Link} from 'react-router-dom';

export default function Middlebar() {
  return (
    <div className='Middlebar-container'>
        
        <nav className="nav-middle">
        <ul>
         <Link to="/pricing">Commercialshop</Link>
          <Link to="/pricing">Commercial office</Link>
          <Link to="/about">Commercial Land</Link>
          <Link to="/pricing">Commercial Building</Link>
          <Link to="/pricing">Industrial Building</Link>
          <Link to="/about">Industrial Land</Link>
          <Link to="/pricing">Coworking Space</Link>
          <Link to="/pricing">Private Office</Link>
          <Link to="/about">Meeting Room</Link>
        </ul>
      </nav>
      <div className='building-bg'>
        <div className='form'>
            <p className='formal'><b>Choose from 25,000+<br>
            </br> spaces for your <br>
            </br>buisiness</b></p>
            <p className='informal'><b></b>Get inspired and find your perfect place<b></b></p>
            <select >
            <option value="volvo">Looking for</option>
           <option value="saab">Commercial shop</option>
           <option value="opel">Commercial office</option>
            <option value="audi">Commercial Land</option>
            <option value="volvo">Commercial Building</option>
           <option value="saab">Industrial Land</option>
           <option value="opel">Commercial office</option>
            <option value="audi">Coworking Space</option>
            <option value="opel">Private office</option>
            <option value="audi">Meeting Room</option>
            
            </select>
            <br></br>
            <select >
            <option value="volvo">Select City</option>
           <option value="saab">Delhi</option>
           <option value="opel">Noida</option>
            <option value="audi">Hyderabad</option>
            <option value="saab">Mumbai</option>
           <option value="opel">Banglore</option>
            <option value="audi">Cochin</option>
            <option value="audi">Chennai</option>
            </select>
            <input type="button" class="button" value="Search"></input>
        </div>
      </div>

    

    </div>
  )
}
