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
        images: ['/images/web-1.jpg', '/images/web-1.jpg', '/images/web-1.jpg', '/images/web-1.jpg'],
        title: 'HR Maven',
        summary: 'HR Maven is a comprehensive Human Resource Management System (HRMS) designed to streamline HR operations and enhance workforce management. Built using Angular for a dynamic front-end experience, Node.js for a robust server-side environment, and MongoDB for scalable data management, HR Maven offers a seamless and efficient solution for handling HR tasks. The system features employee records management, payroll processing, leave tracking, and performance evaluation modules, all integrated into a user-friendly interface. With its powerful back-end and responsive design, HR Maven simplifies HR processes and improves organizational efficiency.',
        github: 'https://github.com/Girijamohantashankar/HrMaven.git',
        demo: 'https://github.com/Girijamohantashankar/HrMaven.git'
    },
    {
        images: ['/images/web-2.png', '/images/web-21.png', '/images/web-23.png', '/images/web-24.png'],
        title: 'LPU Placement Portal',
        summary: 'The LPU Placement Portal is a dedicated platform designed to facilitate and streamline the placement process for students of Lovely Professional University (LPU). Utilizing HTML, CSS, and JavaScript, this portal offers an intuitive and interactive interface for students, employers, and placement coordinators. Key features include job postings, application tracking, resume submissions, and interview scheduling. The portal enhances the placement experience by providing real-time updates and efficient management of placement activities, ensuring that students and employers can connect seamlessly.',
        github: 'https://github.com/Girijamohantashankar/LPU-Placement-website.git',
        demo: 'https://girijamohantashankar.github.io/LPU-Placement-website/'
    },

    {
        images: ['/images/web-3.png', '/images/web-31.png', '/images/web-33.png','/images/web-34.png','/images/web-35.png'],
        title: 'Arsha Demo',
        summary: 'Arsha Demo is a responsive, static website developed using HTML, CSS, and JavaScript. Designed with modern aesthetics and a user-friendly interface, the site showcases a clean and professional layout, making it ideal for corporate or business presentations. With a focus on responsiveness, the Arsha Demo adapts seamlessly to different screen sizes and devices, ensuring an optimal viewing experience for users. The project demonstrates the use of best practices in front-end development, delivering a visually appealing and functional static website.',
        github: 'https://github.com/Girijamohantashankar/Arsha.Bootstrap.Demo.github.io.git',
        demo: 'https://girijamohantashankar.github.io/Arsha.Bootstrap.Demo.github.io/'
    },
    {
        images: ['/images/web-4.png', '/images/web-41.png', '/images/web-42.png', '/images/web-43.png'],
        title: 'Responsive Bootstrap',
        summary: 'Responsive Bootstrap is a fully responsive website designed using HTML, CSS, and Bootstrap. This project leverages Bootstrap’s powerful grid system and responsive utilities to create a dynamic and flexible layout that adjusts seamlessly across different screen sizes. The site features modern UI components, consistent styling, and responsive navigation, making it suitable for various business and personal use cases. With a focus on mobile-first design, the project ensures a smooth user experience on any device.',
        github: 'https://github.com/Girijamohantashankar/bootstrap.github.io.git',
        demo: 'https://girijamohantashankar.github.io/bootstrap.github.io/'
    },
    {
        images: ['/images/project-5.png', '/images/project-51.png', '/images/project-52.png', '/images/project-53.png', '/images/project-54.png'],
        title: 'ShortPost',
        summary: 'Shortpost is a modern blogging platform developed with React, Node.js, MongoDB, and Cloudinary. The app enables users to create, edit, and share short-form content effortlessly. Cloudinary is utilized for managing and optimizing media assets, ensuring fast and reliable image and video handling. The platform leverages MongoDB for robust data storage and retrieval, Node.js for backend processing, and React for a dynamic and responsive user interface. Shortpost provides a seamless experience for content creators and readers alike, with a focus on simplicity and efficiency.',
        github: 'https://github.com/Girijamohantashankar/ShortPost.git',
        demo: 'https://shortpost.onrender.com/'
    },
    {
        images: ['/images/project-6.png', '/images/project-61.png', '/images/project-62.png', '/images/project-63.png', '/images/project-64.png', '/images/project-65.png'],
        title: 'DeepChat',
        summary: 'Interview Preparation is a comprehensive platform designed to help users prepare for job interviews. Built using React, Node.js, MongoDB, and Bootstrap, the app offers a range of features including practice questions, mock interviews, and performance tracking. Bootstrap is used to create a responsive and user-friendly interface, enhancing the overall user experience. MongoDB handles data management, while Node.js powers the backend functionality. The platform aims to provide users with the tools and resources needed to excel in their interviews, offering a structured and supportive preparation environment.',
        github: 'https://github.com/Girijamohantashankar/InterviewPreparation.git',
        demo: 'https://interviewpreparation.onrender.com/'
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
                <h1>Responsive Web<span>Project</span> Works</h1>
                <p>Here are a few <span className='span_text'>Web projects</span> I have worked on recently.</p>

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
        </div>
    );
}
