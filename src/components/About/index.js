import React from 'react';
import Slides from '../../containers/Slides';
import './about.css';

const About = () => {
    return (
        <div className='row justify-content-md-start mt-5 pt-5 mb-5' style={{ fontFamily: `Montserrat` }}>

            <div className='col-md-6 text-dark mt-3 mb-5 p-5'>

                <div className='row justify-content-md-center'>
                    <div className='col-md-9 border border-dark rounded-lg p-3 text-center' style={{backgroundColor: `rgba(255,255,255,.9)`}}>
                        <h3 className='p-2 pb-4'>Hello and Welcome!</h3>
                        <h5>A little bit About Us</h5>
                        <p><strong>Cigerettes 4 U 4 Less</strong> is a privately owned Tobacco Shop conviently located in Palos Verde Plaza in Walnut Creek, CA. The shop is owned and operated by Billy S. as he has taken ownership since 2017.</p>
                        <a className='btn btn-primary btn-block' href='tel:9259470809'><strong> Call Us</strong> <i className="fas fa-phone"></i></a>
                    </div>
                </div>

            </div>

            <div className='col-md-4 mt-5 mb-5 '>
                <Slides />
            </div>
        </div>
    )
}

export default About;