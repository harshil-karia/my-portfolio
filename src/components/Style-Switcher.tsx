// components/StyleSwitcher.tsx
'use client';
import React, { useEffect } from 'react';
import './skins/color-1.css';
import './skins/color-2.css';
import './skins/color-3.css';
import './skins/color-4.css';
import './skins/color-5.css';

const StyleSwitcher: React.FC = () => {
  useEffect(() => {
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler") as HTMLElement;
    const dayNight = document.querySelector(".day-night") as HTMLElement;
    const alternateStyles = document.querySelectorAll<HTMLLinkElement>(".alternate-style");

    const handleToggle = () => {
      document.querySelector(".style-switcher")?.classList.toggle("open");
    };

    const handleScroll = () => {
      if (document.querySelector(".style-switcher")?.classList.contains("open")) {
        document.querySelector(".style-switcher")?.classList.remove("open");
      }
    };

    const handleStyleChange = (color: string) => {
      alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
          style.removeAttribute("disabled");
        } else {
          style.setAttribute("disabled", "true");
        }
      });
    };

    const handleDayNightToggle = () => {
      dayNight?.querySelector("i")?.classList.toggle("fa-sun");
      dayNight?.querySelector("i")?.classList.toggle("fa-moon");
      document.body.classList.toggle("dark");
    };

    const initializeDayNightIcon = () => {
      if (document.body.classList.contains("dark")) {
        dayNight?.querySelector("i")?.classList.add("fa-sun");
      } else {
        dayNight?.querySelector("i")?.classList.add("fa-moon");
      }
    };

    styleSwitcherToggle?.addEventListener("click", handleToggle);
    window.addEventListener("scroll", handleScroll);
    dayNight?.addEventListener("click", handleDayNightToggle);
    window.addEventListener("load", initializeDayNightIcon);

    return () => {
      styleSwitcherToggle?.removeEventListener("click", handleToggle);
      window.removeEventListener("scroll", handleScroll);
      dayNight?.removeEventListener("click", handleDayNightToggle);
      window.removeEventListener("load", initializeDayNightIcon);
    };
  }, []);

  const handleStyleChange = (color: string) => {
    console.log("Changing style to:", color); // Debugging line
    const alternateStyles = document.querySelectorAll<HTMLLinkElement>(".alternate-style");
    alternateStyles.forEach((style) => {
      console.log("Current style:", style.getAttribute("title")); // Debugging line
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  };

  return (
    <div className="style-switcher">
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
