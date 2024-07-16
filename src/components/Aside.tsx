// components/Aside.tsx
"use client";
import React from 'react';
import './style.css';
import './skins/color-1.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { usePathname, useRouter } from 'next/navigation';
import { useAsideContext } from '../context/AsideContext';

const Aside: React.FC = () => {
    const { isAsideOpen, toggleAside } = useAsideContext();
    const url = usePathname();
    const router = useRouter();

    const isActive = (path: string) => url === path;

    const navigate = (path: string) => {
        router.replace(path);
        toggleAside(); 
    };

    return (
        <div className={`aside ${isAsideOpen ? 'open' : ''}`}>
            <div className={`nav-toggler ${isAsideOpen ? 'open' : ''}`} onClick={toggleAside}>
                <span></span>
            </div>
            <div className="logo">
                <a href="#">Harshil</a>
            </div>
            <ul className="nav">
                <li><a onClick={() => navigate('/')} style={{ cursor: 'pointer' }} className={isActive('/') ? 'active' : ''}><i className="fas fa-home"></i>Home</a></li>
                <li><a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }} className={isActive('/about') ? 'active' : ''}><i className="fa fa-user"></i>About</a></li>
                <li><a onClick={() => navigate('/service')} style={{ cursor: 'pointer' }} className={isActive('/service') ? 'active' : ''}><i className="fa fa-list"></i>Services</a></li>
                <li><a onClick={() => navigate('/portfolio')} style={{ cursor: 'pointer' }} className={isActive('/portfolio') ? 'active' : ''}><i className="fa fa-briefcase"></i>Projects</a></li>
                <li><a onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }} className={isActive('/contact') ? 'active' : ''}><i className="fa fa-comments"></i>Contact</a></li>
            </ul>
        </div>
    );
};

export default Aside;
