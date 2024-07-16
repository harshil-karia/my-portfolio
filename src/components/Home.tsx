'use client'
import React, { useEffect, useState } from 'react'
import me from '../assets/images/harshil_crop.jpg'
import { usePathname } from 'next/navigation'


const Home = () => {
    
  return ( 
    <section className="home active section" id="home">
        <div className="container">
            <div className="row">
                <div className="home-info padd-15">
                    <h3 className="hello">Hello, my name is <br/> <span className="name typing"></span></h3>
                    <h3 className="my-profession">I'm a <span className="typing-skills"></span></h3>
                    <p> I'm a web developer with experience of 4 year. My expertise is to create website, Database, API, and many more... </p>
                    <a href="#" className="btn" id="downloadButton" target="_blank">Download CV</a>
                </div>
                <div className="home-img padd-15">
                    <img src={me.src} alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
