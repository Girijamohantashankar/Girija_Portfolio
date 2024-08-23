import "../../../styles/Certificate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import certificate from "../../../public/images/certificate-1.png";
import certificate2 from "../../../public/images/certificate-2.png";
import certificate3 from "../../../public/images/certificate-3.png";
import certificate4 from "../../../public/images/certificate-4.png";
import certificate5 from "../../../public/images/certificate-5.png";
import certificate6 from "../../../public/images/certificate-6.png";


export default function CertificatePage() {
  return (
    <div className="Certificate_container">
      <h1 className="cerficate_heading">
        Professi<span>onal Cou</span>rses and <span>Certi</span>fications
      </h1>
      <p className="certificate_para">
        “Here are the <span>certifications</span> and <span>courses</span> I’ve
        completed, showcasing my commitment to <span>professional</span>{" "}
        development and <span>continuous</span> learning.”
      </p>
      <div className="certificate_cards">
        <div className="card">
          <Image src={certificate} alt="certificate" className="card-image" />
          <div className="card-overlay">
            <h1>Coursera</h1>
            <h4 className="card-title">Big Data Analysis with SQL</h4>
            <div className="card-icons">
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/E8VBAA2MQFKV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src={certificate2} alt="certificate" className="card-image" />
          <div className="card-overlay">
            <h1>Google Cloud - Minnesota</h1>
            <h4 className="card-title">Google Cloud Product Fundamentals em Português Brasileiro</h4>
            <div className="card-icons">
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/47VF2Y2KE6V5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src={certificate3} alt="certificate" className="card-image" />
          <div className="card-overlay">
            <h1>The Hong Kong University of Science and Technology</h1>
            <h4 className="card-title">Front-End Web Development with React</h4>
            <div className="card-icons">
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/F5TWBGCL6RLQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src={certificate4} alt="certificate" className="card-image" />
          <div className="card-overlay">
            <h1>Duke University</h1>
            <h4 className="card-title">Programming Foundations with JavaScript, HTML and CSS</h4>
            <div className="card-icons">
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/EB2ZW6QYGV6W"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src={certificate5} alt="certificate" className="card-image" />
          <div className="card-overlay">
            <h1>The Hong Kong University of Science and Technology</h1>
            <h4 className="card-title">Front-End Web UI Frameworks and Tools: Bootstrap 4</h4>
            <div className="card-icons">
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/D67DAQW54XHN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src={certificate5} alt="certificate" className="card-image" />
          <div className="card-overlay">
            <h1>freeCodeCamp</h1>
            <h4 className="card-title">Responsive Web Design</h4>
            <div className="card-icons">
              <a
                href="https://www.freecodecamp.org/certification/GirijaShankar/responsive-web-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
