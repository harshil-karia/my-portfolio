'use client'
import { useAsideContext } from '@/context/AsideContext';
import React from 'react'

const Contact = () => {
    const { isAsideOpen } = useAsideContext();
  return (
    <section className={`contact section active ${isAsideOpen?'open': ''}`} id="contact">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>Contact Me</h2>
                </div>
            </div>
            <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
            <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
            <div className="row">
                    <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-phone"></i></div>
                    <h4>Call Me On</h4>
                    <p>+91 9016479179</p>
                    </div>
                    <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                    <h4>Office</h4>
                    <p>Nadiad, Gujarat, India</p>
                    </div>
                    <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fa fa-envelope"></i></div>
                    <h4>Email</h4>
                    <p>harshil.karia.hk@gmail.com</p>
                    </div>
                    <div className="contact-info-item padd-15">
                    <div className="icon"><i className="fab fa-linkedin"></i></div>
                    <h4><a href="https://www.linkedin.com/in/harshil-karia-658694293/" target="_blank">LinkedIn</a></h4>
                    <p>Harshil Karia</p>
                    </div>
            </div>
            <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
            <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
                <form id="contact-form">
                    <div className="row">
                        <div className="contact-form padd-15">
                            <div className="row">
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <button type="submit" className="btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    </section>
  )
}

export default Contact
