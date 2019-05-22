import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav id='nav' className="row navbar navbar-expand-lg fixed-top bg-dark text-white">

            <a className="col-md-4 navbar-brand text-white ml-3" href="#nav" style={{fontFamily: `Quicksand`, fontSize: `3.5vw`}}><i class="fas fa-store-alt mr-2"></i>Cigerettes4U4Less</a>

            {/* <div className="navbar-collapse "> */}
                <ul className="navbar-nav col-md-7 ml-5 pl-5 pt-2">
                    <li className="nav-item mr-5">
                        <a className="nav-link text-white" href="#home" style={{fontFamily: `Quicksand`}}>Home</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link text-white" href="#about" style={{fontFamily: `Quicksand`}}>About Us</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link text-white" href="#request" style={{fontFamily: `Quicksand`}}>Request Products</a>
                    </li>
                </ul>
            {/* </div> */}
        </nav>
    )
}

export default Navbar;