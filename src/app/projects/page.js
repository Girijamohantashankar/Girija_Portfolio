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
import MobileApplication from '../mobileapplication/page';
import WebProjects from '../webproject/page';
import CompanyTask from '../companytask/page';
import LanguageProject from '../languageproject/page';



const projects = [
  {
    images: ['/images/project-1.png', '/images/project-11.png', '/images/project-12.png', '/images/project-13.png'],
    title: 'Jobupdate360',
    summary: 'JobUpdate360 is a full-stack web application built with React, Node.js, and MongoDB that provides users with a comprehensive platform to post, manage, and search for jobs. The project streamlines the job-hunting process by allowing recruiters to post job listings and candidates to apply directly through the platform. With features like job filtering, application tracking, and user authentication, JobUpdate360 offers a seamless experience for both recruiters and job seekers. The backend is powered by Node.js and MongoDB, ensuring efficient data management and a robust API for handling job-related operations.',
    github: 'https://github.com/Girijamohantashankar/jobupdate360.git',
    demo: 'https://jobupdate360.in/'
  },
  {
    images: ['/images/project-2.png', '/images/project-21.png', '/images/project-23.png', '/images/project-24.png'],
    title: 'Pocket Saving',
    summary: 'PacketSaving is a full-stack web application designed to help users manage and optimize their finances. Built using React, Node.js, and MongoDB, this platform offers various tools and features that allow users to track expenses, set savings goals, and monitor their financial progress. With secure user authentication and a responsive interface, users can easily input their financial data, view reports, and gain insights into their spending habits. The backend, developed with Node.js and MongoDB, ensures that all financial data is stored securely and efficiently, making PacketSaving a reliable solution for personal financial management.',
    github: 'https://github.com/Girijamohantashankar/PocketSaving-App.git',
    demo: 'https://pocketsaving.onrender.com/'
  },

  {
    images: ['/images/project-3.png', '/images/project-31.png', '/images/project-33.png'],
    title: 'DeepChat',
    summary: 'DeepChat is a real-time chat application built using React, Node.js, and MongoDB, with Chakra UI for styling. This platform enables users to connect and communicate instantly with others through a clean and intuitive interface. Featuring real-time messaging, user authentication, and group chat options, DeepChat offers a seamless experience across devices. The use of Chakra UI ensures a consistent and responsive design, while the backend, powered by Node.js and MongoDB, handles real-time communication and data storage efficiently. DeepChat provides a secure and interactive way to stay connected with friends, colleagues, and communities.',
    github: 'https://github.com/Girijamohantashankar/DeepChat.git',
    demo: 'https://deepchat-app.onrender.com/'
  },
  {
    images: ['/images/project-4.png', '/images/project-41.png', '/images/project-42.png', '/images/project-43.png', '/images/project-44.png'],
    title: 'Adventure Trip',
    summary: 'Adventure Trip is a dynamic travel platform built using React, Node.js, MongoDB, and Firebase, with SCSS for styling. This platform allows users to explore and book various adventure trips around the world. With Firebase integrated for user authentication and real-time data synchronization, the app ensures secure and seamless user experiences. SCSS is used to provide a visually appealing, responsive design, while Node.js and MongoDB handle backend logic and data management. Adventure Trip offers a one-stop solution for travel enthusiasts looking for thrilling adventure experiences.',
    github: 'https://github.com/Girijamohantashankar/Adventuretrip.git',
    demo: 'https://adventuretrip.onrender.com/'
  },
  {
    images: ['/images/project-5.png', '/images/project-51.png', '/images/project-52.png', '/images/project-53.png', '/images/project-54.png'],
    title: 'ShortPost',
    summary: 'Shortpost is a modern blogging platform developed with React, Node.js, MongoDB, and Cloudinary. The app enables users to create, edit, and share short-form content effortlessly. Cloudinary is utilized for managing and optimizing media assets, ensuring fast and reliable image and video handling. The platform leverages MongoDB for robust data storage and retrieval, Node.js for backend processing, and React for a dynamic and responsive user interface. Shortpost provides a seamless experience for content creators and readers alike, with a focus on simplicity and efficiency.',
    github: 'https://github.com/Girijamohantashankar/ShortPost.git',
    demo: 'https://shortpost.onrender.com/'
  },
  {
    images: ['/images/project-7.png', '/images/project-71.png', '/images/project-72.png', '/images/project-73.png'],
    title: 'JS Master',
    summary: 'Currently developing JSMaster, a full-stack web application designed to offer a comprehensive JavaScript problem-solving platform. The frontend is built with React to provide an interactive and responsive user interface, while Node.js handles the backend operations, ensuring efficient server-side logic. Mongoose is utilized for managing MongoDB databases, enabling effective data storage and retrieval. The application aims to feature a range of JavaScript problems, user authentication, and performance tracking, with ongoing development focused on enhancing functionality and user experience.',
    github: 'https://github.com/Girijamohantashankar/jsmaster.git',
    demo: ''
  },
];

export default function ProjectsPage() {
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
        <h1>My Re<span>cent</span> Work</h1>
        <p>Here are a few <span className='span_text'>full stack projects</span> I have worked on recently.</p>

        <div className='project_grid'>
          {projects.map((project, index) => (
            <div key={index} className='project_card'>
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

      <MobileApplication />
      <WebProjects />
      <CompanyTask />
      <LanguageProject />
    </div>
  );
}
