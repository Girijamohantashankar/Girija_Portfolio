"use client";
import React, { useState } from 'react';
import '../../../styles/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


const projects = [
    {
        images: ['/images/language-1.jfif', '/images/language-11.jpg', '/images/language-12.png',],
        title: 'Online Fraud Detection',
        summary: 'Developed an online fraud detection system using Python to identify and mitigate fraudulent activities in real-time. Utilized advanced algorithms and machine learning techniques to analyze transaction data and detect suspicious patterns. Implemented features such as anomaly detection, predictive modeling, and data visualization to enhance fraud prevention and response capabilities. The system integrates with existing databases and user interfaces to provide actionable insights and improve overall security.',
        github: 'https://github.com/Girijamohantashankar/Online-fraud-Detection-Using-ML.github.io.git',
        demo: 'https://github.com/Girijamohantashankar/Online-fraud-Detection-Using-ML.github.io.git'
    },
    {
        images: ['/images/language-2.png', '/images/language-21.jpg', '/images/language-22.jpg',],
        title: 'ATM card system',
        summary: 'Developed a C++ application simulating the functionality of an ATM card system. The project includes core features such as account balance management, transaction processing (deposits and withdrawals), PIN verification, and transaction history. Implemented key functionalities including secure user authentication, real-time balance updates, and error handling. The system demonstrates fundamental concepts of object-oriented programming and data handling, providing a practical example of how ATM card systems operate.',
        github: 'https://github.com/Girijamohantashankar/ATM-Function.git',
        demo: 'https://github.com/Girijamohantashankar/ATM-Function.git'
    },

    // {
    //     images: ['/images/mobile-3.png', '/images/mobile-31.png', '/images/mobile-32.png'],
    //     title: 'DeepChat App',
    //     summary: 'DeepChat is a real-time chat application built using React, Node.js, and MongoDB, with Chakra UI for styling. This platform enables users to connect and communicate instantly with others through a clean and intuitive interface. Featuring real-time messaging, user authentication, and group chat options, DeepChat offers a seamless experience across devices. The use of Chakra UI ensures a consistent and responsive design, while the backend, powered by Node.js and MongoDB, handles real-time communication and data storage efficiently. DeepChat provides a secure and interactive way to stay connected with friends, colleagues, and communities.',
    //     github: 'https://github.com/Girijamohantashankar/Deep-Chat.git',
    //     demo: 'https://deepchat-app.onrender.com/'
    // },

];

export default function LanguageProjectPage() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='projects_container'>
            <div className='recent_work'>
                <h1>My Langu<span>age web</span> Project Works</h1>
                <p>Here are a few <span className='span_text'>Language  projects</span> I have worked.</p>
                <div className='project_grid'>
                    {projects.map((project, index) => (
                        <div key={index} className='project_card mobile_card_view'>
                            <Slider {...settings}>
                                {project.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className='project_image_wrapper'>
                                        <Image
                                            src={image}
                                            alt={`Project ${index} Image ${imgIndex}`}
                                            className='project_image'
                                            layout='responsive'
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                ))}
                            </Slider>
                            <div className='project_info'>
                                <h2>{project.title}</h2>
                                <p className='project_para'>
                                    {expandedIndex === index
                                        ? project.summary
                                        : project.summary.length > 100
                                            ? project.summary.substring(0, 100) + '...'
                                            : project.summary}
                                    {project.summary.length > 100 && (
                                        <span onClick={() => handleReadMore(index)} className='read_more_button'>
                                            {expandedIndex === index ? 'Read Less' : 'Read More'}
                                        </span>
                                    )}
                                </p>

                                <div className='project_buttons'>
                                    <a href={project.github} target='_blank' rel='noopener noreferrer' className='project_button'>
                                        <FontAwesomeIcon icon={faGithub} /> GitHub
                                    </a>
                                    <a href={project.demo} target='_blank' rel='noopener noreferrer' className='project_button'>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo View
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
