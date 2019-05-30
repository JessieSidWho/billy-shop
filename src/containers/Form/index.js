import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    state = {
        name: '',
        email: '',
        product: '',
        quanity: 0,
        formSubmitted: false
    };

    handleCancel = this.handleCancel.bind(this);
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    static sender = 'c4u4less@gmail.com';

    handleCancel() {
        this.setState({
            name: '',
            email: '',
            product: '',
            quantity: 0
        });
    }

    handleChange(event) {
        this.setState({
            name: event.target.value,
            email: event.target.value,
            product: event.target.value,
            quantity: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template
        } = this.props.env;

        this.sendFeedback(
            template,
            this.sender,
            receiverEmail,
            this.state.feedback
        );

        this.setState({
            formSubmitted: true
        });
    }

    sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
        window.emailjs
            .send('gmail', templateId, {
                senderEmail,
                receiverEmail,
                feedback
            })
            .then(res => {
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

    render() {
        return (
            <div className='row justify-content-md-center mt-5 mb-5 pb-5 pt-5'>
                <div className='col-md-7'>

                    <form id='request' className=" border border-secondary rounded-lg p-5" onSubmit={this.handleSubmit}>
                        <h1 className='text-center'>Product Request</h1>
                        
                        <p>Name<br></br>
                            <input
                                type='text'
                                className=""
                                id="nameInput"
                                name="name"
                                onChange={this.handleChange}
                                placeholder="Name"
                                required
                                value={this.state.name}
                            /></p>
                        <p>E-mail<br></br>
                            <input
                                type='text'
                                className=""
                                id="emailInput"
                                name="email"
                                onChange={this.handleChange}
                                placeholder="Product Name"
                                required
                                value={this.state.email}
                            /></p>
                        <p>Product Request<br></br>
                            <input
                                type='text'
                                className=""
                                id="productInput"
                                name="product"
                                onChange={this.handleChange}
                                placeholder="Product Name"
                                required
                                value={this.state.product}
                            /></p>
                        <p>Quantity Requested<br></br>
                            <input
                                type='number'
                                className=""
                                id="quantityInput"
                                name="quantity"
                                onChange={this.handleChange}
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

Form.propTypes = {
    env: PropTypes.object.isRequired
};

export default Form;