"use client";
import React, { useState } from "react";
import styles from "./CoursesDetails.module.scss";
import Image from "next/image";

const CoursesDetails = () => {
  return (
    <div className={styles.coursesDetails}>
      <div className={styles.coursesDetailsContainer}>
        <div className={styles.coursesDetailsBanner}></div>
        <div className={styles.coursesDetailsContents}>
          <div className={styles.coursesDetailsHead}>
            <p>Web Development</p>
            <h2>Full Stack Web Development</h2>
          </div>
          <div className={styles.coursesDetailsContent}>
            <p>
              A comprehensive course that covers the fundamentals and advanced
              concepts of web development, from front-end to back-end
              technologies.
            </p>
          </div>
          <div className={styles.coursesDetailsBtn}>
            <button>Buy Now</button>
          </div>
        </div>
        <div className={styles.coursesDetailsCard}>
          <Image src="/image/coures1.jpeg" width={200}
          height={200}/>
          <div className={styles.cardInfo}>
            <p className={styles.cardInfo1}>Free</p>
            <p className={styles.cardInfo2}>$99.00 Free50% off</p>
          </div>
          <div className={styles.infoBtns}>
            <button>Add Cart</button>
            <button>Add Watchlist</button>
          </div>
          <div className={styles.shortInfo}>
            <h2>Short Info</h2>
            <div className={styles.shortInfoContents}>
            <div className={styles.shortInfoContent}>
            <label htmlFor="">Enrolled   :</label>
                <p>32 students</p>
               </div>
               <div className={styles.shortInfoContent}>
            <label htmlFor="">Duration    :</label>
                <p>29 hours</p>
               </div>
               <div className={styles.shortInfoContent}>
            <label htmlFor="">Level      :</label>
                <p>Beginner</p>
               </div>
               <div className={styles.shortInfoContent}>
            <label htmlFor="">Chapters   :</label>
                <p>32 students</p>
               </div>
            </div>
            <div className={styles.shortInfoBtn}>
                <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
