import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='row fixed justify-content-md-center'>
                <div className='col-md-6 text-center'>
                    <a className="text-dark" href="#nav" style={{ fontFamily: `Quicksand`, fontSize: `3.5vw` }}><i className="fas fa-store-alt mr-2"></i>Cigerettes4U4Less</a>

                    <div id='nav' className="row navbar-expand-lg text-dark justify-content-md-end">

                        <div className="col-md-4 pl-3 pr-3 pt-1 pb-2">
                            <a className=" text-dark" href="#home" style={{ fontFamily: `Quicksand`, fontSize: `16px` }}>About Us</a>
                        </div>
                        <div className="col-md-4 pl-3 pr-3 pt-1 pb-2">
                            <a className=" text-dark" href="#about" style={{ fontFamily: `Quicksand`, fontSize: `16px` }}>Location</a>
                        </div>
                        <div className="col-md-4 pl-3 pr-3 pt-1 pb-2">
                            <a className=" text-dark" href="#request" style={{ fontFamily: `Quicksand`, fontSize: `16px` }}>Request</a>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;