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
        images: ['/images/web-3.png', '/images/web-31.png', '/images/web-33.png', '/images/web-34.png', '/images/web-35.png'],
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
        images: ['/images/web-5.png', '/images/web-51.png', '/images/web-52.png', '/images/web-53.png',],
        title: 'Portfolio (react js)',
        summary: 'This is a personal portfolio website built using React. The project showcases a collection of my work, skills, and experiences in web development. It features a clean and modern design with interactive elements, smooth transitions, and responsive layouts. The portfolio includes sections such as About Me, Projects, Skills, and Contact, allowing visitors to explore my work and get in touch. Leveraging the power of React, this portfolio provides a dynamic and seamless user experience across all devices.',
        github: 'https://github.com/Girijamohantashankar/Portfolio.git',
        demo: 'https://girijaportfolio.netlify.app/'
    },
    {
        images: ['/images/web-6.png', '/images/web-61.png',],
        title: 'GSM Music Player',
        summary: 'GSM Music Player is a music streaming application built using React.js. This project provides users with an intuitive interface to browse, search, and play music tracks. The application features a clean design with interactive elements and smooth transitions, enhancing the overall user experience. Users can create playlists, shuffle tracks, and enjoy a seamless music experience with efficient React-based state management and components.',
        github: 'https://github.com/Girijamohantashankar/gsmusicplayer.git',
        demo: 'https://gsmusic.onrender.com/'
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Flappy Bird Game',
        summary: 'I have built a Flappy Bird game using JavaScript, where the goal is to navigate a bird through a series of obstacles by controlling its movement with the space bar or mouse clicks. The game features responsive physics, such as gravity pulling the bird down, and the ability to flap to keep the bird airborne. The gameplay includes dynamic scoring based on the number of obstacles passed, with challenges increasing as the game progresses. Your project showcases skills in HTML, CSS, and JavaScript to create an engaging browser-based game with smooth animations and user interactions.',
        github: 'https://github.com/Girijamohantashankar/Bird_game.git',
        demo: ''
    },

    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'supplement website',
        summary: 'I have built a supplement website using HTML, CSS, and JavaScript. The website likely serves as an informational and e-commerce platform for health and fitness supplements, featuring product listings, descriptions, and purchasing options. It may include dynamic features such as product filters, interactive user interfaces, and a responsive design for seamless browsing across different devices. This project showcases your ability to create an engaging and functional online store, providing users with an intuitive experience for browsing and purchasing supplements.',
        github: 'https://github.com/Girijamohantashankar/kalari_12.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'YouTube Clone',
        summary: 'I Have built a YouTube clone using HTML and CSS, focusing on recreating the core layout and design elements of the YouTube platform. The project likely includes features such as a video player interface, navigation bar, sidebar with categories, video thumbnails, and responsive design to mimic the look and feel of YouTube. Although built primarily with HTML and CSS, the clone demonstrates your ability to replicate a complex user interface with clean and organized code, showcasing your skills in frontend development. This project highlights your proficiency in structuring web layouts and creating visually appealing designs.',
        github: 'https://github.com/Girijamohantashankar/youtube_clone.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Signup RGBA BGColor',
        summary: 'I have built a signup page using HTML and CSS, where the background dynamically changes to an RGBA color effect. This page showcases a modern design approach by incorporating a semi-transparent background that adjusts its color based on the users interaction, enhancing the visual appeal and user experience. The combination of HTML for structure and CSS for styling allows for a sleek and responsive layout, making the signup process more engaging and aesthetically pleasing. This project demonstrates your ability to blend functionality with creativity in web design.',
        github: 'https://github.com/Girijamohantashankar/signup-bgcolor-change.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Background Theme Changer',
        summary: 'I have built a Background Theme Changer using HTML, CSS, and JavaScript. This project allows users to dynamically switch between different background themes with a click of a button, adding interactivity and customization to the web page. The HTML provides the structure, CSS handles the styling, and JavaScript enables the functionality for changing the background. Users can select from a range of colors or predefined themes, enhancing the user experience by giving them control over the pages appearance. This project highlights your skills in integrating front-end technologies to create dynamic and interactive web features.',
        github: 'https://github.com/Girijamohantashankar/color-switcher-theme.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Envoie Website',
        summary: 'I have built the Envoie website using HTML, CSS, and JavaScript with responsive design. This project focuses on delivering a clean, user-friendly interface that adapts seamlessly across different screen sizes, ensuring optimal viewing on mobile devices, tablets, and desktops. The HTML structure provides the foundation, while CSS handles both the visual aesthetics and responsiveness. JavaScript is used for interactive elements like navigation menus, form validations, or dynamic content updates. The responsive design approach ensures that the website adjusts smoothly to different screen resolutions, providing an excellent user experience across all devices.',
        github: 'https://github.com/Girijamohantashankar/Envoie.github.io.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Portfolio (HTML, Css, JS)',
        summary: 'Developed a responsive portfolio website showcasing various projects and skills. Utilized HTML, CSS, and JavaScript to create an engaging, user-friendly interface. The site features adaptive layouts for various devices and screen sizes, ensuring a seamless user experience across desktop, tablet, and mobile platforms. Implemented interactive elements and smooth animations to enhance visual appeal and usability.',
        github: 'https://github.com/Girijamohantashankar/portfolio.github.io.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Protein Website',
        summary: 'Designed and developed a responsive website dedicated to providing information about protein sources and their benefits. Leveraged HTML, CSS, and JavaScript to create a dynamic and visually appealing interface. The website features interactive elements, such as nutrient calculators and protein source comparisons, and ensures optimal performance across various devices and screen sizes. The design includes user-friendly navigation and informative content to engage and educate visitors on healthy protein choices.',
        github: 'https://github.com/Girijamohantashankar/Protien-website.github.io.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Food Website',
        summary: 'Designed and developed a visually appealing food application using HTML and CSS. The app features a clean, user-friendly interface for browsing and selecting various food items. Implemented responsive design principles to ensure optimal display across different devices and screen sizes. The project includes a menu layout, detailed food item pages, and styling for interactive elements. Focused on creating an engaging and intuitive user experience with an emphasis on aesthetic design and functionality.',
        github: 'https://github.com/Girijamohantashankar/Find_Your_Food.github.io.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'College library management system',
        summary: 'Developed a comprehensive college library management system using HTML, CSS, and JavaScript. The application provides features such as browsing and searching for books, viewing detailed book information, and managing library records. Utilized HTML and CSS to create a structured and visually appealing interface, and JavaScript to implement interactive elements and dynamic functionality, such as search filters and user interactions. The system enhances the user experience with responsive design and intuitive navigation.',
        github: 'https://github.com/Girijamohantashankar/CollegeLibrary.github.io-.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Photography',
        summary: 'Created an elegant and responsive photography website using HTML, CSS, and JavaScript. The website showcases a gallery of high-quality images with features such as image sliders, lightbox effects, and interactive photo galleries. Utilized HTML and CSS for layout and styling, ensuring a visually appealing and user-friendly design. JavaScript was employed to add dynamic functionalities, such as smooth transitions and interactive elements, enhancing the overall user experience and showcasing the photography portfolio effectively.',
        github: 'https://github.com/Girijamohantashankar/PhotoGraphy.github.io.git',
        demo: ''
    },
    {
        images: ['/images/web-.png', '/images/web-.png',],
        title: 'Adventure Trip',
        summary: 'Developed an engaging and responsive Adventure Trip website using HTML, CSS, and JavaScript. The website features detailed itineraries, interactive maps, and booking functionalities. Utilized HTML for structuring the content, CSS for styling and creating visually appealing layouts, and JavaScript to implement dynamic features such as interactive trip filters, booking forms, and real-time updates. The design focuses on providing a seamless user experience, with responsive elements to ensure accessibility across various devices and screen sizes.',
        github: 'https://github.com/Girijamohantashankar/Adventure-Trip.git',
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
