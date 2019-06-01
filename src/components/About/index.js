import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='row justify-content-md-start mt-5 pt-5 mb-5' style={{ fontFamily: `Montserrat` }}>

            <div className='col-md-6 text-dark mt-5 mb-5 p-5'>
                <h3 className='p-2 text-center pb-4'>Hello and Welcome!</h3>
                <h5>A little bit About Us</h5>
                <p><strong>Cigerettes 4 U 4 Less</strong> is a privately owned Tobacco Shop conviently located in Palos Verde Plaza in Walnut Creek, CA. The shop is owned and operated by Billy S. as he has taken ownership since 20xx.  </p>
            </div>

            <div className='col-md-4 mt-5 mb-5 '>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">

                        <div class="carousel-item m-4 active">
                            <img class="d-block w-100" src="https://s3-media3.fl.yelpcdn.com/bphoto/MGZsVAsTc_0LCzIkOoktMg/o.jpg" alt="First slide" />
                        </div>

                        <div class="carousel-item m-4">
                            <img class="d-block w-100" src="https://s3-media1.fl.yelpcdn.com/bphoto/t2aQbOKkPGXTGq6cWSAkKA/o.jpg" alt="Second slide" />
                        </div>

                        <div class="carousel-item m-4">
                            <img class="d-block w-100" src="https://s3-media3.fl.yelpcdn.com/bphoto/9TXLp6NVh-vqAJiTbJSXXA/o.jpg" alt="Third slide" />
                        </div>

                        <div class="carousel-item m-4">
                            <img class="d-block w-100" src="https://s3-media2.fl.yelpcdn.com/bphoto/XXA5OB0rr1711Z6YzVeZng/o.jpg" alt="Fourth slide" />
                        </div>

                        <div class="carousel-item m-4">
                            <img class="d-block w-100" src="https://s3-media3.fl.yelpcdn.com/bphoto/Y9D9SzJAvJ98bb9N7S3eOg/o.jpg" alt="Fifth slide" />
                        </div>

                    </div>
                    <a class="carousel-control-prev ml-4" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;