'use client'
import { useAsideContext } from '@/context/AsideContext';
import React from 'react'


const Services = () => {
    const { isAsideOpen } = useAsideContext();
  return (
      <section className={`service section active ${isAsideOpen?'open': ''}`} id="service">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>Services</h2>
                </div>
            </div>
            <div className="row">
                    <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="fa fa-laptop-code"></i>
                        </div>
                        <h4>Backend Development</h4>
                        <p>I develop robust backend systems to manage data and server logic efficiently.</p>
                    </div>
                    </div>
                    <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="fa fa-palette"></i>
                        </div>
                        <h4>Database Design</h4>
                        <p>I design databases for efficient data storage, retrieval, and management.</p>
                    </div>
                    </div>
                    <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="fa fa-search"></i>
                        </div>
                        <h4>API Design</h4>
                        <p>I design APIs to ensure robust, scalable, and efficient backend integrations.</p>
                    </div>
                    </div>
                    <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="fa fa-code"></i>
                        </div>
                        <h4>Full Stack Development</h4>
                        <p>I do full-stack development, integrating front-end and back-end technologies seamlessly.</p>
                    </div>
                    </div>
                    <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="fa fa-mobile-alt"></i>
                        </div>
                        <h4>App Development</h4>
                        <p>I develop applications with user-centric features and seamless functionality across platforms.</p>
                    </div>
                    </div>
                    <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="fa fa-bullhorn"></i>
                        </div>
                        <h4>API Integration</h4>
                        <p>I also specialize in API integration, ensuring smooth communication between various software components.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Services
