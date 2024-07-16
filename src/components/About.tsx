'use client'
import React from 'react'
import './style.css'
import './skins/color-1.css'
import { useAsideContext } from '@/context/AsideContext'
import { useRouter } from 'next/navigation'


const About = () => {
    const { isAsideOpen } = useAsideContext();
    const router = useRouter()
  return (
      <section className={`about section active ${isAsideOpen?'open': ''}`} id="about">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3>I'm Harshil Karia a <span>Web Developer</span></h3>
                                <p>I am a dedicated student currently pursuing my studies while also freelancing. With a passion for web development, I have gained practical experience in creating websites, databases, and APIs. I combine my academic knowledge with real-world projects, showcasing my skills in technologies like React, PHP, and Next.js. I am always eager to learn and take on new challenges, making me a versatile and ambitious individual. In addition to my technical expertise, I am committed to delivering high-quality work and ensuring client satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p>Birthday : <span>09 October 2004</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Email : <span>harshil.karia.hk@gmail.com</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Degree : <span>BTech.  IT</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Mobile : <span>+91 9016478179</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>City : <span>Nadiad</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Freelance : <span>Available</span></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="buttons padd-15">
                                        <br/> <a onClick={()=>{router.replace('/contact')}} style={{cursor: 'pointer'}} className="btn hire-me">Hire Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="skills padd-15">
                                <div className="row">
                                    <div className="skill-item padd-15">
                                        <h5>React</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '60%' }}></div>
                                            <div className="skill-percent">60%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>PHP</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '75%' }}></div>
                                            <div className="skill-percent">75%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>NEXT.Js</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '70%' }}></div>
                                            <div className="skill-percent">70%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>API Development</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '76%' }}></div>
                                            <div className="skill-percent">76%</div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="education padd-15">
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                        
                                                <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2023 - 2026
                                                </h3>
                                                <h4 className="timeline-title">Bachelor's in Information Technology</h4>
                                                <p className="timeline-text">I am pursuing a BTech in Information Technology at Dharmsinh Desai University in Nadiad, Gujarat, starting in 2023 and expected to graduate in 2026. This program is equipping me with a solid foundation in IT. My time at the university has been invaluable for developing my technical skills and knowledge.</p>
                                                </div>
                                                <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2020 - 2023
                                                </h3>
                                                <h4 className="timeline-title">Diploma in Computer Enginnering</h4>
                                                <p className="timeline-text">I completed Diploma in Computer Engineering from Government Polytechnic Porbandar, which I started in 2020 and finished in 2023 with 9.38 CGPA. This diploma provided me with essential skills and knowledge in computer engineering, laying the groundwork for my further studies and career in IT.</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience padd-15">
                                <h3 className="title">Experience</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                                <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> June 2024 - July 2024
                                                </h3>
                                                <h4 className="timeline-title">Mystery-Message</h4>
                                                <p className="timeline-text">I developed a "Mystery Message" website using Next.js, Tailwind CSS, and TypeScript. This project showcases my skills in building responsive and dynamic web applications with modern technologies. It highlights my ability to create engaging user experiences and maintain clean, efficient code.</p>
                                                </div>
                                                <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i className="fa fa-calendar"></i> 2023 - 2026
                                                </h3>
                                                <h4 className="timeline-title">Food Delivery System</h4>
                                                <p className="timeline-text">I created a food delivery website during my diploma using PHP, HTML, CSS, and JavaScript. This project demonstrates my ability to develop functional web applications and integrate various front-end and back-end technologies. It reflects my skills in creating user-friendly interfaces and managing server-side functionalities.</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About
