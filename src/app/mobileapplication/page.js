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
        images: ['/images/mobile-1.png', '/images/mobile-1.png', '/images/mobile-1.png', '/images/mobile-1.png'],
        title: 'Todo App',
        summary: 'ToDo App is a mobile application designed to help users manage and organize their tasks effectively. The frontend of the app is built using HTML and CSS, ensuring a clean and intuitive user interface, while the backend is powered by Node.js and MongoDB (Mongoose). The app allows users to add, update, and delete tasks, providing an efficient way to track daily activities and manage time. This mobile-friendly solution makes it easy for users to stay organized on the go.',
        github: 'https://github.com/Girijamohantashankar/todo_frontend.git',
        demo: 'https://www.mediafire.com/file/3d1elqccd2jnl4u/app-release.zip/file'
    },
    {
        images: ['/images/mobile-2.png', '/images/mobile-21.png', '/images/mobile-22.png',],
        title: 'GSM Player App',
        summary: 'GSM Player is a music streaming application built using JavaScript, offering users a seamless way to play and manage their favorite songs. The app features an intuitive interface for browsing, selecting, and playing music tracks, with essential functionalities like play, pause, skip, and volume control. The lightweight design and efficient performance of GSM Player provide an enjoyable and smooth music experience. This project showcases your expertise in JavaScript by creating a dynamic and interactive audio player.',
        github: 'https://github.com/Girijamohantashankar/GSM-Player.git',
        demo: 'https://gsmusic.onrender.com/'
    },

    {
        images: ['/images/mobile-3.png', '/images/mobile-31.png', '/images/mobile-32.png'],
        title: 'DeepChat App',
        summary: 'DeepChat is a real-time chat application built using React, Node.js, and MongoDB, with Chakra UI for styling. This platform enables users to connect and communicate instantly with others through a clean and intuitive interface. Featuring real-time messaging, user authentication, and group chat options, DeepChat offers a seamless experience across devices. The use of Chakra UI ensures a consistent and responsive design, while the backend, powered by Node.js and MongoDB, handles real-time communication and data storage efficiently. DeepChat provides a secure and interactive way to stay connected with friends, colleagues, and communities.',
        github: 'https://github.com/Girijamohantashankar/Deep-Chat.git',
        demo: 'https://deepchat-app.onrender.com/'
    },

];

export default function MobilePage() {
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
                <h1>My Re<span>cent Mobile</span> Application Work</h1>
                <p>Here are a few <span className='span_text'>Mobile Application projects</span> I have worked on recently.</p>

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
