import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='row fixed-top justify-content-md-center' style={{background: `rgba(255,255,255,.9)`}}>
                <div className='col-md-6 text-center'>
                    <div className="text-dark" style={{ fontFamily: `Quicksand`, fontSize: `3.5vw` }}><i className="fas fa-store-alt mr-2"></i>Cigerettes4U4Less</div>

                    <div className="row navbar-expand-lg text-dark justify-content-md-end">

                        <div className="col-md-4 pl-3 pr-3 pt-1 pb-2">
                            <a className=" text-dark" href="#about" style={{ fontFamily: `Quicksand`, fontSize: `16px` }}>About Us</a>
                        </div>
                        <div className="col-md-4 pl-3 pr-3 pt-1 pb-2">
                            <a className=" text-dark" href="#location" style={{ fontFamily: `Quicksand`, fontSize: `16px` }}>Location</a>
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