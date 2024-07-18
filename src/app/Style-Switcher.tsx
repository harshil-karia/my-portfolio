
'use client';
import React, { useEffect, useState } from 'react';
import './css/skins/color-1.css';
import './css/skins/color-2.css';
import './css/skins/color-3.css';
import './css/skins/color-4.css';
import './css/skins/color-5.css';
import './style-switcher.css'

const StyleSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStyleChange = (color: string) => {
    console.log("Changing style to:", color);
    const alternateStyles = document.querySelectorAll<HTMLLinkElement>(".alternate-style");
    console.log("Found styles:", alternateStyles.length); // Log the length of found styles
    alternateStyles.forEach((style) => {
      console.log("Current style:", style.getAttribute("title"));
      if (color === style.getAttribute("title")) {
        style.disabled = false;
      } else {
        style.disabled = true;
      }
    });
  };
  

  useEffect(() => {
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler") as HTMLElement;
    const dayNight = document.querySelector(".day-night") as HTMLElement;

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleDayNightToggle = () => {
      dayNight.querySelector("i")?.classList.toggle("fa-sun");
      dayNight.querySelector("i")?.classList.toggle("fa-moon");
      document.body.classList.toggle("dark");
    };

    const initializeDayNightIcon = () => {
      if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i")?.classList.add("fa-sun");
      } else {
        dayNight.querySelector("i")?.classList.add("fa-moon");
      }
    };

    styleSwitcherToggle?.addEventListener("click", handleToggle);
    window.addEventListener("scroll", handleScroll);
    dayNight?.addEventListener("click", handleDayNightToggle);
    initializeDayNightIcon();

    return () => {
      styleSwitcherToggle?.removeEventListener("click", handleToggle);
      window.removeEventListener("scroll", handleScroll);
      dayNight?.removeEventListener("click", handleDayNightToggle);
    };
  }, [isOpen]);

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon">
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon">
        <i className="fas"></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color-1" onClick={() => handleStyleChange('color-1')}></span>
        <span className="color-2" onClick={() => handleStyleChange('color-2')}></span>
        <span className="color-3" onClick={() => handleStyleChange('color-3')}></span>
        <span className="color-4" onClick={() => handleStyleChange('color-4')}></span>
        <span className="color-5" onClick={() => handleStyleChange('color-5')}></span>
      </div>
    </div>
  );
};

export default StyleSwitcher;
