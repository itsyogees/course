import React from 'react';
import styles from "./Footer.module.scss";
import Image from "next/image"; 

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return(
        <>
        
        <div className={styles.footerContainer}>

            <div className={styles.contactDetails} >
                <div className={styles.footerLogo}>    
                    <Image src="/image/logo.png" alt="Logo" width={97} height={65} />
                    <h3>Education Platform</h3>
                   
                </div>
                    <p>Call Us</p>
                    <h4>+91 12345 67890</h4>
                    <p>123 AnnaSalai street, North Side of
                    Ganapathy Temple, Tamil nadu.</p>
                    <p>educationplateform@gmail.com</p>

                <div className={styles.footerIcons}>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedinIn />
 
                </div>
            </div>

            <div className={styles.aboutDetail}>
                <h3>ABOUT</h3>
                <p>About Us</p>
                <p>Become a Instructor</p>
                <p>Events</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>

            <div className={styles.categoriesDetail}>
                <h3>CATEGORIES</h3>
                <p>Development</p>
                <p>Business</p>
                <p>Finance & Accounting</p>
                <p>IT & Software</p>
                <p>Office Productivity</p>
                <p>Marketing</p>
            </div>

            <div className={styles.supportDetail}>
                <h3>SUPPORT</h3>
                <p>Documentation</p>
                <p>FAQs</p>
                <p>Dashboard</p>
                <p>Contact</p>
            </div>

        </div>        
        
        </>
    )
}

export default Footer;