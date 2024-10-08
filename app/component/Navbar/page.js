"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        {/* Logo Section */}
        <div className={styles.navIcons}>
          <div className={styles.logo}>
            <Image src="/image/Component 1.png" alt="Logo" width={200} height={65} />
          </div>

          {/* Hamburger and Close Icons */}
          <div className={styles.menuToggle} onClick={toggleMenu}>
            {!isMenuOpen ? <FaBars className={styles.icon} /> : <FaTimes className={styles.icon} />}
          </div>

          {/* Navigation Items */}
          <ul className={`${styles.navItems} ${isMenuOpen ? styles.active : ""}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/Events">Event</Link></li>
            <li><Link href="/Courses">Courses</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Right Side Icons and Text */}
        <div className={styles.rightMenu}>
          <FaSearch className={styles.icon} />
          <FaRegHeart className={styles.icon} />
          <FaRegUserCircle className={styles.icon} />
          <span className={styles.helloText}>Hello,</span>
          <span className={styles.signInText}>Sign In</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
