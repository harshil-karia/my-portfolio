'use client'
import React, { useEffect, useState } from 'react'
import me from '../assets/images/harshil_crop.jpg'
import Typed from 'typed.js'
import { useAsideContext } from '@/context/AsideContext'



const Home = () => {
    var typedNameInstance: Typed;
    function initializeTypingNameAnimation() {
        // Destroy the existing Typed instance if it exists
        if (typedNameInstance) {
            typedNameInstance.destroy();
        }
    
        // Create a new Typed instance
        typedNameInstance = new Typed(".typing", {
            strings: ["Harshil Karia"],
            typeSpeed: 100,
            //backSpeed: 60,
            //loop: true,
            onComplete: function(self) {
                self.cursor.remove(); // Remove the cursor element
            }
        });
    }
    var typedSkillsInstance: Typed;
    function initializeTypingSkillsAnimation() {
        // Destroy the existing Typed instance if it exists
        if (typedSkillsInstance) {
            typedSkillsInstance.destroy();
        }
    
        // Create a new Typed instance
        typedSkillsInstance = new Typed(".typing-skills", {
            strings: ["Web Developer","API Developer","Database Designer","App Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });
    }
    useEffect(()=>{
        initializeTypingNameAnimation();
        initializeTypingSkillsAnimation();
    },[])
    const { isAsideOpen } = useAsideContext();
        
  return ( 
    <section className={`home section active ${isAsideOpen?'open': ''}`} id="home">
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
