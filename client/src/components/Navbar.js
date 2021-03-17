
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbars">
               <div className="navbar-containers">
                <Link to='/' className="navbar-logos">
                    ServiceX <i className='fas fa-wrench' />
                </Link>
                <div className='menus-icons' onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                    <ul className={click ? 'nav-menus active': 'nav-menus' }>
                        <li className='navs-items'>
                            <Link to='/' className='navs-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='navs-items'>
                            <Link to='/services' className='navs-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='navs-items'>
                            <Link to='/dashboard' className='navs-links' onClick={closeMobileMenu}>
                                Dashboad
                            </Link>
                        </li>
                        <li className='navs-items'>
                            <Link to='/sign-up' className='navs-links' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
               </div> 
            </nav>
        </>
    )
}

export default Navbar
