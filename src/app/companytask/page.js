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
        images: ['/images/company-2.png', '/images/company-3.png', '/images/company-21.png', '/images/company-22.png',],
        title: 'Surrogacy4all',
        summary: 'Surrogacy4All is a surrogacy agency based in New York that helps individuals and couples build their families through surrogacy. The company assists both intended parents and surrogate mothers throughout the surrogacy process. Surrogate mothers can earn between $35,000 to $65,000 for their services, depending on various factors, such as the mothers health and the type of surrogacy.The agency provides support to surrogates, helping them manage the emotional and physical aspects of the process. Surrogacy4All focuses on both traditional and gestational surrogacy, where either the surrogates egg is used (traditional) or the egg is from the intended mother or donor (gestational). The agency highlights the emotional fulfillment many surrogates feel, knowing they have helped others experience parenthood.',
        github: 'https://github.com/Girijamohantashankar/surrogacy4all_task.git',
        demo: 'https://girijamohantashankar.github.io/surrogacy4all_task/'
    },
    {
        images: ['/images/company-301.png', '/images/company-302.png', '/images/company-303.png', '/images/company-304.png',],
        title: 'Osumare Marketing Solutions',
        summary: 'Osumare Marketing Solutions, founded in 2011 in Pune, India, is a digital marketing company offering a variety of services including SEO, social media marketing, PPC, and more. The companies approach is based on three core values: converge, collaborate, and change. They work closely with clients to understand their needs, develop strategic plans, and monitor progress to achieve optimal results. With a team size of 10-49 people, they cater to enterprise-level clients and offer services priced between $30 to $49 per hour .',
        github: 'https://github.com/Girijamohantashankar/osumare-frontend-task.git',
        demo: 'https://girijamohantashankar.github.io/osumare-frontend-task/'
    },
    {
        images: ['/images/componay-401.png', '/images/componay-405.png', '/images/componay-406.png', '/images/componay-407.png','/images/componay-408.png','/images/componay-409.png'],
        title: 'Webskitters',
        summary: 'Webskitters is an award-winning web design and development company with a global presence. They have completed over 8,000 projects and cater to more than 1,500 clients worldwide. Their services range from web and mobile app development to digital marketing and custom business solutions. Webskitters has received several prestigious awards, including the National MSME Award 2022 and the Bengal Chamber of Commerce MSME of the Year Award for 2023-24. They emphasize innovation, using AI-based task monitoring and agile project management to deliver quality services across various industries .',
        github: 'https://github.com/Girijamohantashankar/webskitters-text.git',
        demo: 'https://girijamohantashankar.github.io/webskitters-text/'
    },
    {
        images: ['/images/company-1.jpg', '/images/company-11.jpg', '/images/company-12.jpg', '/images/company-13.jpg'],
        title: 'Holidayhub (Razorpay Integration)',
        summary: 'HolidayHub.in is a company that tasked you with integrating Razorpay into their platform using React. The goal was to implement a seamless payment gateway that allows users to complete transactions directly on the website. The integration involves setting up Razorpays API, creating a payment component in React, and ensuring that users can securely make payments using various methods like credit cards, debit cards, UPI, and wallets. This setup improves the overall user experience, making the checkout process smooth and efficient.',
        github: 'https://github.com/Girijamohantashankar/Razorpay.git',
        demo: 'https://holidayhub.in/'
    },
    {
        images: ['/images/componay-501.png', '/images/componay-502.png', '/images/componay-503.png', '/images/componay-504.png','/images/componay-505.png','/images/componay-506.png'],
        title: 'Code Decoder',
        summary: 'At Code decoder developer, we build premium digital products that simplify and enhance the everyday lives of people. We are India’s largest digital products company with presence in a wide range of categories across news, entertainment, marketplaces and transactions.',
        github: 'https://github.com/Girijamohantashankar/Rummy.git',
        demo: 'https://girijamohantashankar.github.io/Rummy/'
    },
    {
        images: ['/images/componay-601.png', '/images/componay-602.png', '/images/componay-603.png', '/images/componay-604.png'],
        title: 'World Folk Festival',
        summary: 'I have built a website for a Canadian client, World Folk Festival, using HTML, CSS, and JavaScript. The site likely features a vibrant and user-friendly design, showcasing the festivals cultural diversity, event lineup, and artist profiles. With a focus on responsive design, the site ensures that users can access information about the festival on various devices. JavaScript adds interactivity, such as dynamic event schedules or image galleries, making the experience engaging for visitors. The project highlights your skills in front-end development, creating a professional and visually appealing platform for an international event.',
        github: 'https://github.com/Girijamohantashankar/world-folk-festival.git',
        demo: 'https://girijamohantashankar.github.io/world-folk-festival/'
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
                <h1>Companies Ass<span>ignment </span> Project <span>Wor</span>ks</h1>
                <p>Here are a few <span className='span_text'>frontend assignment  projects</span> I have worked.</p>

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
