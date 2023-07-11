import React, { useEffect } from 'react'
export default function Contact(props) {
    useEffect(() => {
      props.setProgress(100)
    }, [])
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="contact-h1">Contact Us</h1>
                        <p className="contact-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="contact-info-item-text">
                                    <h4>Address</h4>
                                    <p>123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <i className="fas fa-phone-alt"></i>
                                <div className="contact-info-item-text">
                                    <h4>Phone</h4>
                                    <p>+012 345 6789</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <i className="fas fa-envelope"></i>
                                <div className="contact-info-item-text">
                                    <h4>Email</h4>
                                    <p>
                                        <a href="mailto:aman@gmail.com"></a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <i className="fas fa-clock"></i>
                                <div className="contact-info-item-text">
                                    <h4>Open Hours</h4>
                                    <p>Mon - Fri: 8 AM to 9 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )




}