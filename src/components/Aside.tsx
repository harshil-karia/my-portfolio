import React from 'react'
import './style.css'
import './skins/color-1.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Aside = () => {
  return (
    <div className="aside">
        <div className="logo">
            <a href="#">Harshil</a>
        </div>
        <div className="nav-toggler">
            <span></span>
        </div>
        <ul className="nav">
            <li><a href="#home" className="active"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="#about"><i className="fa fa-user"></i>About</a></li>
            <li><a href="#service"><i className="fa fa-list"></i>Services</a></li>
            <li><a href="#portfolio"><i className="fa fa-briefcase"></i>Projects</a></li>
            <li><a href="#contact"><i className="fa fa-comments"></i>Contact</a></li>
        </ul>
    </div>
  )
}

export default Aside
