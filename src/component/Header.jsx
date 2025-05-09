import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import styles from "./Header.module.css"; // Import CSS module
import logo from '../assets/logo-new.svg';
import LoginModal from "../pages/Login";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // Login modal state

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles["header-container"]}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <button className={styles["mobile-menu-button"]} onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <nav className={`${styles["nav-menu"]} ${isMobileMenuOpen ? styles.active : ""}`}>
          <div className={styles["dropdown"]}>
            <NavLink to="/city" className={styles["nav-link"]} activeClassName={styles.active}>
              CITY
            </NavLink>
            <ul className={styles["dropdown-menu"]}>
              <li><NavLink to="/city/BAD VILBEL" className={styles["dropdown-item"]} activeClassName={styles.active}>BAD VILBEL</NavLink></li>
              <li><NavLink to="/city/HANAU" className={styles["dropdown-item"]} activeClassName={styles.active}>HANAU</NavLink></li>
              <li><NavLink to="/city/MAINZ" className={styles["dropdown-item"]} activeClassName={styles.active}>MAINZ</NavLink></li>
              <li><NavLink to="/city/BAD NAUHEIM" className={styles["dropdown-item"]} activeClassName={styles.active}>BAD NAUHEIM</NavLink></li>
              <li><NavLink to="/city/FRANKFURT AM MAIN" className={styles["dropdown-item"]} activeClassName={styles.active}>FRANKFURT AM MAIN</NavLink></li>
            </ul>
          </div>

          <NavLink to="/partner" className={styles["nav-link"]} activeClassName={styles.active}>PARTNER</NavLink>
          <NavLink to="/about" className={styles["nav-link"]} activeClassName={styles.active}>ABOUT US</NavLink>
          <NavLink to="/gokido-tool" className={styles["nav-link"]} activeClassName={styles.active}>GOKIDO TOOL</NavLink>
          <NavLink to="/contact" className={styles["nav-link"]} activeClassName={styles.active}>CONTACT</NavLink>

          <div className={styles["language-selector"]}>
            <button className={styles["language-button"]} onClick={toggleDropdown}>
              German (DE)
              <svg
                className={styles["dropdown-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className={styles["language-dropdown"]}>
                <NavLink to="#" className={styles["dropdown-item"]} activeClassName={styles.active}>English (EN)</NavLink>
                <NavLink to="#" className={styles["dropdown-item"]} activeClassName={styles.active}>German (DE)</NavLink>
              </div>
            )}
          </div>

          {/* 🔒 Login Button triggers modal */}
          <button onClick={openLoginModal} className={styles["login-button"]}>
            Log in
          </button>
        </nav>
      </div>

      {/* 🔐 Login Modal shown on click */}
      {showLoginModal && <LoginModal isOpen={showLoginModal} onClose={closeLoginModal} />}
    </header>
  );
};

export default Header;
