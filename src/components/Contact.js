import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        window.scrollTo(0, 0)
  
      }
  
    render() {
        return (
            <div className='contact-section'>
                <div className='contact-hero-section'>
                    <div className="contact-hero-bg-wrapper">
                        <div className="container contact">
                            <h1 className="heading">Contact Acme Outdoors</h1>
                            <div className="contact-block-wrapper">
                                <div className="contact-block">
                                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg" alt="" className="contact-icon" />
                                    <h2>Contact Us</h2>
                                    <p>Just want to say hi?&nbsp;We'd love to hear from you. We love our customers and community!&nbsp;</p>
                                    <a href="#contact" className="pink black">Send Us A Message</a>
                                </div>
                                <div className="contact-block">
                                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg" alt="" className="contact-icon" />
                                    <h2>Get Support</h2>
                                    <p>Have an issue with an order or with a product you purchased from us?&nbsp;Fill out our support form.</p>
                                    <a href="https://university.webflow.com/support" target="_blank" className="pink black">Contact Support</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-image-div"></div>
                    </div>

                </div>
                <ContactForm/>
                <Footer/>
            </div>);
    }
}

export default Contact;