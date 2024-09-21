import React, { useState } from 'react';
import "./Contact.css"
import axios from 'axios'; // Import axios for making HTTP requests

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNo: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            // Send a POST request to your backend server with the form data
            await axios.post('https://formspree.io/f/xeqypyqy', formData);
            alert('Message sent successfully!');
            // Optionally, clear the form after successful submission
            setFormData({
                name: '',
                email: '',
                contactNo: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <div className="background">
            <div className="container_contact">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            <div className="app-contact">CONTACT INFO : +91 9905990681</div>
                        </div>
                        <div className="screen-body-item">
                            <div className="app-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control"
                                            type="text"
                                            placeholder="NAME"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control"
                                            type="email"
                                            placeholder="EMAIL"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control"
                                            type="number"
                                            placeholder="CONTACT NO"
                                            name="contactNo"
                                            value={formData.contactNo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group message">
                                        <input
                                            className="app-form-control"
                                            type="text"
                                            placeholder="MESSAGE"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="app-form-button" type="submit">SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="credits">
                    Developed by
                    <a className="credits-link" href="www.linkedin.com/in/dharm-veer-043743221" target="_blank" rel="noopener noreferrer">
                        <svg className="dribbble" viewBox="0 0 200 200">
                            <g stroke="#ffffff" fill="none">
                                <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
                                <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth="20"></path>
                                <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth="20"></path>
                                <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth="20"></path>
                            </g>
                        </svg>
                        Dharmveer
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
