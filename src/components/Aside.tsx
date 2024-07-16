"use client"
import React from 'react'
import './style.css'
import './skins/color-1.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { usePathname, useRouter } from 'next/navigation';
const Aside = () => {
    const url = usePathname();
    const router = useRouter()
    const isActive = (path: string) => url === path;
    const toHome = () => {
        router.replace('/');
    }
    const toAbout = () => {
        router.replace('/about');
    }
    const toService = () => {
        router.replace('/service');
    }
    const toPortfolio = () => {
        router.replace('/portfolio');
    }
    const toContact = () => {
        router.replace('/contact');
    }
  return (
    <div className="aside">
        <div className="logo">
            <a href="#">Harshil</a>
        </div>
        <div className="nav-toggler">
            <span></span>
        </div>
        <ul className="nav">
            <li><a onClick={toHome} style={{cursor: 'pointer'}} className={isActive('/')?'active': ''}><i className="fas fa-home"></i>Home</a></li>
            <li><a onClick={toAbout} style={{cursor: 'pointer'}} className={isActive('/about')?'active': ''}><i className="fa fa-user"></i>About</a></li>
            <li><a onClick={toService} style={{cursor: 'pointer'}} className={isActive('/service')?'active': ''}><i className="fa fa-list"></i>Services</a></li>
            <li><a onClick={toPortfolio} style={{cursor: 'pointer'}} className={isActive('/portfolio')?'active': ''}><i className="fa fa-briefcase"></i>Projects</a></li>
            <li><a onClick={toContact} style={{cursor: 'pointer'}} className={isActive('/contact')?'active': ''}><i className="fa fa-comments"></i>Contact</a></li>
        </ul>
    </div>
  )
}

export default Aside
