import React  from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Xentice
        </Link>
        <ul>
         <Link to="/pricing">Post Ad</Link>
          <Link to="/pricing">Near me</Link>
          <Link to="/about">Login/Signup</Link>
        </ul>
      </nav>
    )
  }

// function Navbar() {
//     const[click,setClick]=useState(false);
//     const handleClick=()=>setClick(!click);
//     const closeMobileMenu=()=>setClick(false);
//   return (
//     <>
//     <nav className="navbar">
//         <div className="navbar-container">
//          <h1>Xentice</h1>
//          <div className="menu-icon" onClick={handleClick}>
//             <i className={click? 'fas fa-times':'fas fa-bars'}/>
//          </div>
//          <ul className={click? 'nav-menuactive' : 'nav-menu'}>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Post Requirements</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Post Ad</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Post Services</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Profile</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Notification</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Near me</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Pricing</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Login/signup</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>About us</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Contact us</Link>
                
//             </li>
//             <li className='nav-item'>
//                 <Link to ="/" className='nav-links' onClick={closeMobileMenu}>Privacy/Policy</Link>
                
//             </li>
            

//          </ul>
//         </div>
//     </nav>
//     </>
//   )
// }
// export default Navbar;
