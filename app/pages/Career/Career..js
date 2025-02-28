"use client"; 

import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa"; 
import styles from "./Career.module.scss";

import { CgImage } from "react-icons/cg";

const Career = () => {
    const [filter, setFilter] = useState("recent");

    const jobs = [
        { id: 1, title: "Senior Software Engineer", img: "career1.png", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore.", experience: "Fresher / 0-1 Year Experience", date: "Remote | Today", addedRecently: true },
        { id: 2, title: "Junior Software Engineer", img: "career2.png", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore.", experience: "Fresher / 0-1 Year Experience", date: "Remote | Yesterday", addedRecently: false },
        { id: 3, title: "Full Stack Developer", img: "career3.png",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore.",  experience: "1-2 Years Experience", date: "Remote | Today", addedRecently: true },
        { id: 4, title: "Backend Developer", img: "career4.png", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod incididunt ut labore dolore.",  experience: "1-2 Years Experience", date: "Remote | Last Week", addedRecently: false },
    ];

    const handleFilterChange = (type) => {
        setFilter(type);
    };

    const filteredJobs = filter === "recent" ? jobs.filter(job => job.addedRecently) : jobs;

    //Form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        dob: '',
        address: '',
        phone: '',
        resume: null
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Basic validation
        for (const key in formData) {
            if (!formData[key] && key !== 'resume') {
                newErrors[key] = 'This field is required';
            }
        }

        if (!formData.resume) {
            newErrors.resume = 'Resume is required';
        }

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }

        console.log('Form data submitted:', formData);
    };

    return (
        <div className={styles.careerContainer}>
            <div className={styles.careerImg}>
                <div className={styles.careerHead}>
                    <h2><span>Come</span> Work With Us</h2>
                    <p>We are looking for great people, who love their work, solving problems, and having fun.</p>
                </div>
            </div>

            <div className={styles.careerFilter}>
                <div
                    className={`${styles.filterHead} ${filter === "recent" ? styles.active : ""}`}
                    onClick={() => handleFilterChange("recent")}
                >
                    <p>Recently Added</p>
                </div>
                <div
                    className={`${styles.filterHead} ${filter === "all" ? styles.active : ""}`}
                    onClick={() => handleFilterChange("all")}
                >
                    <p>See All</p>
                </div>
            </div>


            {filteredJobs.map(job => (
                <div className={styles.careerContent} key={job.id}>
                    <div className={styles.careerContentImg}>
                        <img src={`image/${job.img}`} alt=""/>
                    </div>

                    <div className={styles.careerDetails}>
                        <h2>{job.title}</h2>
                        <h6>{job.info}</h6>
                        <p>{job.experience}</p>
                        <p>{job.date}</p>
                    </div>

                    <div className={styles.careerBtn}>
                        <a href="#read-more"> Read More
                            <FaAngleRight style={{ marginRight: '5px' }} />
                        </a>
                    </div>
                </div>
            ))}


           <div className={styles.careerDescriptionContainer}>
                <div className={styles.careerImage}> </div>

                <div className={styles.descriptionData}>
                   <div className={styles.descriptionHead}>
                     <h3>Job Description</h3>
                    </div>
                    <div className={styles.descriptionBtn}>
                     <button>Apply</button>
                   </div>
                </div>

                   <div className={styles.descriptionContent}>
                     <p>  <span>User-Centered Design (UCD):</span> The design should prioritize the needs, goals, and preferences of users. 
                        A user-friendly interface improves the overall experience and keeps visitors engaged.
                    </p>

                     <p>  <span>Simplicity :</span> Effective web design avoids clutter and ensures that users can easily navigate the site.
                         Simplicity often means clean layouts, readable fonts, and intuitive navigation.
                    </p>

                    
                     <p> <span>Consistency :</span> Maintaining uniform design elements (fonts, colors, button styles, etc.) throughout the site creates a cohesive look and feel, enhancing the user experience.</p>

                    
                     <p> <span>Responsive Design :</span> Modern websites must work across multiple devices—desktops, tablets, and mobile phones.
                         Responsive design ensures that the website layout adjusts to fit different screen sizes.</p>

                   
                     <p> <span>Accessibility :</span> Websites should be designed to accommodate all users, including those with disabilities.
                         Accessibility standards ensure that sites can be navigated by screen readers, and content is understandable for users with visual or hearing impairments.
                     </p>

                   </div>

                   <div className={styles.descriptionDetails}>

                        <h3>Design Software:</h3>
                        <p> <span>Adobe XD, Figma, Sketch:</span> These tools are used for creating wireframes, mockups, and prototypes.
                            They provide designers with an environment to experiment with layouts and UI elements.
                        </p>

                        <p> <span>Photoshop, Illustrator:</span> Graphics design software used to create and edit visual elements such as logos, icons, and custom images.</p>

                        <h3>Website Builders and Content Management Systems (CMS):</h3>
    
                        <p><span>WordPress, Wix, Squarespace</span> CMS platforms that offer pre-built themes and templates for easy web design and content management.</p>

                        <p><span>Webflow :</span> A no-code tool that combines visual design with the power of HTML/CSS.</p>
                   </div>

            </div>
           

            <div className={styles.formContainer}>
            <h3>Application Form</h3>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <div className={styles.inputs}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                    </div>
                    <div className={styles.inputs}>
                        <label>Email Id</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.inputs}>
                        <label>Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className={styles.errorMessage}>{errors.gender}</span>}
                    </div>
                    <div className={styles.inputs}>
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                        {errors.dob && <span className={styles.errorMessage}>{errors.dob}</span>}
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.inputs}>
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter your address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        {errors.address && <span className={styles.errorMessage}>{errors.address}</span>}
                    </div>
                    <div className={styles.inputs}>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            pattern="[0-9]{10}"
                            placeholder="Enter your mobile number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                    </div>
                </div>

                <div className={styles.fileUpload}>
                    <h3>Upload Your Resume</h3>
                    <div className={styles.fileUploadContainer}>
                        <div className={styles.fileUploadContent}>
                            <CgImage /> 
                            <p>Drag or Browse</p>
                            <p className={styles.fileSizeInfo}>PNG, PDF (max 5MB)</p>
                        </div>
                        <input
                            type="file"
                            accept=".pdf,.png"
                            onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                        />
                    </div>
                </div>

                <div className={styles.submitBtn}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>   


     
    </div>
    
    );
}

export default Career;
