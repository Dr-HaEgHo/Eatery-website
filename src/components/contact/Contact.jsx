import React from 'react'
import "./contact.css"
import dish from '../../assets/dish.png'
function Contact() {
    return ( 
        <div className='contact'> 
        <img src={dish} alt="LOGO" />
        <img src={dish} alt="LOGO" />
            <div className='container'>
                <div className="contact-head">
                    <h2>--Contact Us</h2>
                    <h1>Wanna talk to us ?</h1>
                    <p>let us know in the section</p>
                </div> 
                <form action="" className="contact-form">
                    <input type="text" placeholder="First Name" className='form-name'/>
                    <input type="text" placeholder="Last Name" className='form-name'/>
                    <br />
                    <input type="text" placeholder="Email" className='form-email'/>
                    <br />
                    <input type="text" placeholder="Enter text here" className='form-text'/>
                    <br />
                    <input type="button" value="submit" className='form-button'/>
                </form>
            </div>
        </div>
     );
}

export default Contact;