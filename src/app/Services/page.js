"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../../styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const serviceData = [
  {
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly designs to elevate your online presence.",
    images: [
      "/images/services/web_design.jpeg",
      "/images/services/web_design2.png",
      "/images/services/web_design3.jpeg",
      "/images/services/web_design4.jpeg",
      "/images/services/web_design5.jpeg",
    ],
    link: "/webproject",
  },
  {
    title: "UI Development",
    description:
      "Building intuitive and seamless user interfaces with a focus on usability and accessibility.",
    images: [
      "/images/services/ui_development.jpeg",
      "/images/services/ui_development2.jpeg",
      "/images/services/ui_development3.png",
      "/images/services/ui_development4.jpeg",
      "/images/services/ui_development5.jpeg",
    ],
    link: "/projects",
  },
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, high-performance interfaces with modern web technologies like React, Next, Angular, Vue.js, and more.",
    images: [
      "/images/services/frontend_development.jpeg",
      "/images/services/frontend_development2.png",
      "/images/services/frontend_development3.jpeg",
      "/images/services/frontend_development4.jpeg",
      "/images/services/frontend_development5.jpeg",
    ],
    link: "/webproject",
  },
  {
    title: "Web Development",
    description:
      "Full-stack web development using cutting-edge technologies for efficient and scalable web solutions.",
    images: [
      "/images/services/web_development.jpeg",
      "/images/services/web_development2.png",
      "/images/services/web_development3.jpeg",
      "/images/services/web_development4.jpeg",
      "/images/services/web_development5.jpeg",
    ],
    link: "/projects",
  },
];

export default function ServicesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageSwitchInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === serviceData[0].images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Switch image every 3 seconds

    return () => clearInterval(imageSwitchInterval); // Clear interval on unmount
  }, []);

  return (
    <div className="services_container">
      <h2 className="services_title">My Services</h2>
      <div className="services_grid">
        {serviceData.map((service, index) => (
          <div className="service_item" key={index}>
            <h3>{service.title}</h3>
            <div className="image_slider">
              {service.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image}
                  alt={`${service.title} Image ${imgIndex + 1}`}
                  width={300}
                  height={200}
                  className={`fade-image ${
                    imgIndex === currentImageIndex ? "fade-in" : "fade-out"
                  }`}
                />
              ))}
            </div>
            <p>{service.description}</p>
            {service.link ? (
              <Link href={service.link}>
                <button className="service_button">View Works</button>
              </Link>
            ) : (
              <button className="service_button" disabled>
                No Link Available
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Skills and Technologies Section */}
      <div className="skills_container">
        <h2 className="skills_title">Skills & Technologies</h2>
        <div className="skills_grid">
          <div className="skill_item">
            <h1>React</h1>
          </div>
          <div className="skill_item">
            <h1>Next.js</h1>
          </div>
          <div className="skill_item">
            <h1>Angular</h1>
          </div>
          <div className="skill_item">
            <h1>HTML</h1>
          </div>
          <div className="skill_item">
            <h1>CSS</h1>
          </div>
          <div className="skill_item">
            <h1>JavaScript</h1>
          </div>
          <div className="skill_item">
            <h1>Node.js</h1>
          </div>
          <div className="skill_item">
            <h1>MongoDB</h1>
          </div>
          <div className="skill_item">
            <h1>Express.js</h1>
          </div>
          <div className="skill_item">
            <h1>Firebase</h1>
          </div>
          <div className="skill_item">
            <h1>React Native</h1>
          </div>
        </div>
      </div>

      <div className="contact_cta">
        <h4>Lets Work Together!</h4>
        <Link href="/contact">
          <button className="contact_button">Get in Touch</button>
        </Link>
      </div>

      <div className="social-icons">
        <div className="social-icon">
          <a
            href="https://wa.me/6370296592"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span className="tooltip">WhatsApp</span>
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.facebook.com/girijashankr.mohanta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span className="tooltip">Facebook</span>
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/girijashankr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span className="tooltip">Instagram</span>
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/girijashankarmohanta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="tooltip">LinkedIn</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="mailto:girijashankarmohanta11@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="tooltip">Email</span>
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://github.com/Girijamohantashankar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="tooltip">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
