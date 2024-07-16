import React from 'react'
import food from '../assets/images/food.jpg';
import reactProject from '../assets/images/react.jpg'
import nextProject from '../assets/images/next.jpeg'


const Portfolio = () => {
    // console.log(food);
  return (
    <section className="portfolio section" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="portfolio-heading padd-15">
                                <h2>My Last Projects :</h2>
                            </div>
                        </div>
                        <div className="row">
                             <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <a href="https://github.com/harshil-karia/Mystery-Message" target="_blank"><img src={nextProject.src} alt=""></img></a>
                                    </div>
                                </div>
                             </div>
                             <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <a href="https://github.com/harshil-karia/Blog" target="_blank"><img src={reactProject.src} alt=""/></a>
                                    </div>
                                </div>
                             </div>
                             <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={food.src} alt="" ></img>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </section>
  )
}

export default Portfolio
