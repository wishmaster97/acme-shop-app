import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
            email:'',
            Message:'',
            names:'',
            msgText:false,
            postResponse:false
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    submitHandler= e=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response=> {
            this.setState({postResponse:Response})
            console.log(Response)
            alert("Thank you! Your submission has been received! We'll be in touch soon! ")
        })
        .catch(error=>{
            console.log(error)
            alert("Oops! Something went wrong while submitting the form.");
        })

    }
    render() {
        const{postResponse}=this.state;
        return (
            <div id="contact" className="contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-left">
                            <h2>Contact Us</h2>
                            <div className="w-richtext">
                                <p>Acme Outdoors<br />123 Rainy Street<br />Oklahoma City, OK 73129</p>
                                <p>‍<br /><strong>General Inquiries:</strong>&nbsp;(405) 555-5555<br /><strong>Customer Support:</strong>&nbsp;(405) 555-5556</p>
                            </div>
                        </div>
                        <div className="contact-right">
                            <h2>Contact Form</h2>
                            <p>Send us a message and we'll get back to you as soon as we can! </p>
                            <div className="w-form">
                                <form onSubmit={this.submitHandler} id="email-form" name="email-form">
                                    <label for="name">Name</label>
                                    <input  onChange={this.changeHandler}   value={this.setState.names} type="text" className="input w-input" maxlength="256" name="names"  placeholder="Enter your name" id="name" />
                                    <label for="email">Email Address</label>
                                    <input  onChange={this.changeHandler} value={this.setState.email} type="email" className="input w-input" maxlength="256" name="email"  placeholder="Enter your email address" id="email" required />
                                    <label for="Message">Your Message</label>
                                    <textarea onChange={this.changeHandler} value={this.setState.Message} placeholder="Enter your message" maxlength="5000"  name="Message"  className="input w-input"></textarea>
                                    <input  type="submit" value="Submit" data-wait="Please wait..." className="pink bl"></input>
                                </form> <br/> <br/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;