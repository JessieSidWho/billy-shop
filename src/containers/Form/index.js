// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './form.css';
import { template, userID } from './../../config/keys';

class Form extends Component {
    state = {
        name: '',
        email: '',
        product: '',
        quantity: '',
        formSubmitted: false
    };

    handleCancel = this.handleCancel.bind(this);
    handleName = this.handleName.bind(this);
    handleEmail = this.handleEmail.bind(this);
    handleProduct = this.handleProduct.bind(this);
    handleQuantity = this.handleQuantity.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    static sender = 'c4u4less@gmail.com';

    handleCancel() {
        this.setState({
            name: '',
            email: '',
            product: '',
            quantity: ''
        });
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleProduct(event) {
        this.setState({
            product: event.target.value
        });
    }

    handleQuantity(event) {
        this.setState({
            quantity: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        window.emailjs
            .sendForm('gmail', template, '#request', userID)
            .then(res => {
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));

        this.setState({
            formSubmitted: true
        });
    }

    render() {
        return (
            <div id='request' className='row justify-content-md-center mt-5 mb-5 pb-5 pt-5'>
                <div className='col-md-7 m-3 mt-5'>

                    <form id='form' className=" border border-secondary rounded-lg p-5" onSubmit={this.handleSubmit} style={{backgroundColor: `rgba(255,255,255,.9)`}}>
                        <h1 className='text-center'>Product Request</h1>
                        
                        <p>Name<br></br>
                            <input
                                type='text'
                                className="border border-secondary rounded-sm"
                                id="nameInput"
                                name="name"
                                onChange={this.handleName}
                                placeholder="Name"
                                required
                                value={this.state.name}
                            /></p>
                        <p>E-mail<br></br>
                            <input
                                type='text'
                                className="border border-secondary rounded-sm"
                                id="emailInput"
                                name="email"
                                onChange={this.handleEmail}
                                placeholder="Product Name"
                                required
                                value={this.state.email}
                            /></p>
                        <p>Product Request<br></br>
                            <input
                                type='text'
                                className="border border-secondary rounded-sm"
                                id="productInput"
                                name="product"
                                onChange={this.handleProduct}
                                placeholder="Product Name"
                                required
                                value={this.state.product}
                            /></p>
                        <p>Quantity Requested<br></br>
                            <input
                                type='text'
                                className="border border-secondary rounded-sm"
                                id="quantityInput"
                                name="quantity"
                                onChange={this.handleQuantity}
                                placeholder="Quantity"
                                required
                                value={this.state.quantity}
                            /></p>


                        <div className=" row justify-content-sm-center mt-5">

                            <div className='col-sm-4'>
                                <button className=" border btn btn-block btn-light rounded-sm" onClick={this.handleCancel}>
                                    Cancel
                                </button>
                            </div>

                            <div className='col-sm-4'>
                                <button className=' border btn btn-block btn-dark rounded-sm' type="submit" value="Submit" onClick={this.handleSubmit}>
                                    Submit
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        );
    }
}


export default Form;