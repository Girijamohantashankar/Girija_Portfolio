"use client";
import Link from "next/link";
import "../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">Girija Shankar</span>
          </div>
          <div className="media-icons">
            <a
              href="https://www.facebook.com/girijashankr.mohanta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://github.com/Girijamohantashankar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.instagram.com/girijashankr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/girijashankarmohanta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.youtube.com/@dipuwithstudy5416"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Modules</li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact me</Link>
            </li>
            <li>
              <Link href="/about">About me</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/workexperience">Work Experience</Link>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Services</li>
            <li>
              <Link href="/webproject">Web Project</Link>
            </li>
            <li>
              <Link href="/mobileapplication">Mobile Application</Link>
            </li>
            <li>
              <Link href="/languageproject">Language Project</Link>
            </li>
            <li>
              <Link href="/companytask">Company Task</Link>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name"> Achievements</li>
            <li>
              <Link href="/certificate">My Certificates</Link>
            </li>
            <li>
              <Link href="/education">My Qualifications</Link>
            </li>
            <li>
              <Link href="/skills">My Tech Skills</Link>
            </li>
            <li>
              <Link href="/socialcount">Social Media</Link>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Recomanded Courses</li>
            <li>
              <Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/">
                Responsive Web Design
              </Link>
            </li>
            <li>
              <Link href="https://www.freecodecamp.org/news/how-to-use-variables-and-data-types-in-javascript/">
                JavaScript
              </Link>
            </li>
            <li>
              <Link href="https://www.freecodecamp.org/news/how-to-build-an-event-app-with-node-js/">
                Node Js
              </Link>
            </li>
            <li>
              <Link href="https://www.freecodecamp.org/news/using-entity-framework-core-with-mongodb/">
                Mongoose
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2024 <Link href="/">Girija Shankar Mohanta</Link> All
            rights reserved
          </span>
          <span className="policy_terms">
            <Link href="/term">Privacy policy</Link>
            <Link href="/term">Terms & condition</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
