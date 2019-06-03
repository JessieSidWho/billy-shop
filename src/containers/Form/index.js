import React, { Component } from 'react';
import './form.css';

class Form extends Component {

    render() {
        return (
            <div className='row justify-content-md-center mt-5 mb-5 pb-5 pt-5'>
                <div className='col-md-7 m-3 mt-5'>

                    <form method="POST" action="https://formspree.io/c4u4less@gmail.com" className=" border border-secondary rounded-lg p-5" style={{backgroundColor: `rgba(255,255,255,.9)`}}>
                        <h1 className='text-center'>Product Request</h1>
                        
                        <p>Name<br></br>
                            <input
                                type='text'
                                className="border border-secondary rounded-sm"
                                id="nameInput"
                                name="name"
                                placeholder="Name"
                                required
                            /></p>
                        <p>E-mail<br></br>
                            <input
                                type='email'
                                className="border border-secondary rounded-sm"
                                id="emailInput"
                                name="email"
                                placeholder="E-mail"
                                required
                            /></p>
                        <p>Phone Number<br></br>
                            <input
                                type='phone'
                                className="border border-secondary rounded-sm"
                                id="phoneInput"
                                name="phone"
                                placeholder="Phone #"
                                required
                            /></p>
                        <p>Quantity Requested<br></br>
                            <input
                                type='number'
                                className="border border-secondary rounded-sm"
                                id="quantityInput"
                                name="quantity"
                                placeholder="Quantity"
                                required
                            /></p>
                        <p>Product Request<br></br>
                            <textarea
                                type='text'
                                className="border border-secondary rounded-sm"
                                id="productInput"
                                name="product"
                                placeholder="Product Name and Description"
                                required
                            /></p>


                        {/* <div className=" row justify-content-sm-center mt-5"> */}

                            {/* <div className='col-sm-4'>
                                <button className=" border btn btn-block btn-light rounded-sm" onClick={this.handleCancel}>
                                    Cancel
                                </button>
                            </div> */}

                            <div className='col-sm-12'>
                                <button className='mt-4 border btn btn-block btn-dark rounded-sm' type="submit" value="Submit">
                                    Submit
                                </button>
                            </div>

                        {/* </div> */}
                    </form>

                </div>
            </div>
        );
    }
}


export default Form;