import "../../../styles/WorkExperience.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import image1 from "../../../assets/manthanitsolution-removebg-preview.png";
import image2 from "../../../assets/jethitechs_logo-removebg-preview.png";
import image3 from "../../../assets/1694266484101-removebg-preview.png";
import image4 from "../../../assets/companyexperience-1-removebg-preview.png";
import Image from 'next/image';

export default function WorkExperiencePage() {
    return (
        <div className="experience_container">
            <div className="experience_header">
                <h1>My Work <span>Exp</span>eriences</h1>
            </div>
            <div className="experience_cards">

                <div className="experience_card first_ex">
                    <div className="card_image">
                        <Image
                            src={image1}
                            alt="profile pic"
                            className="experience_img"
                        />
                    </div>
                    <div className="experience_content">
                        <h3>Manthan <span>It Solu</span>tions </h3>
                        <p>Frontend  Developer</p>
                        <p>Jang<span>pura, New</span> Delhi</p>
                        <p>2024 - Present</p>
                    </div>
                    <div className='social_links'>
                        <a href="https://facebook.com/ManthanITSolutions/?modal=admin_todo_tour" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/14392803/admin/updates/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a href="https://www.instagram.com/manthanitsolutions0/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </div>
                </div>

                

                <div className="experience_card second_ex">
                    <div className="card_image">
                        <Image
                            src={image2}
                            alt="profile pic"
                            className="experience_img"
                        />
                    </div>
                    <div className="experience_content">
                        <h3>Jethi Te<span>ch sol</span>utions </h3>
                        <p>Frontend  Developer</p>
                        <p>Jai<span>pur,</span> Rajasthan</p>
                        <p>October 2023</p>
                    </div>
                    <div className='social_links'>
                        <a href="https://www.facebook.com/story.php/?story_fbid=708230047988411&id=jethitech" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="https://x.com/JethiTech/status/1616231540664459265" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                        <a href="https://in.linkedin.com/company/jethitechs" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a href="https://www.instagram.com/explore/locations/114173115927867/jethi-tech-solutions/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </div>
                </div>

                {/* Second Dotted Line */}
                

                <div className="experience_card third_ex">
                    <div className="card_image">
                        <Image
                            src={image3}
                            alt="profile pic"
                            className="experience_img"
                        />
                    </div>
                    <div className="experience_content">
                        <h3>Code<span>De</span>Coder </h3>
                        <p>Frontend  Developer</p>
                        <p>Noi<span>da, Uttar</span>  pradesh</p>
                        <p>August 2023</p>
                    </div>
                    <div className='social_links'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                        <a href="https://in.linkedin.com/company/code-decoder-developer" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </div>
                </div>

                {/* Third Dotted Line */}
                


                <div className="experience_card fourth_ex">
                    <div className="card_image">
                        <Image
                            src={image4}
                            alt="profile pic"
                            className="experience_img"
                        />
                    </div>
                    <div className="experience_content">
                        <h3>venture<span>Pact</span></h3>
                        <p>Associate <span>Software</span>  Developer</p>
                        <p>New York, NY - New York <span>(Head Office)</span></p>
                        <p>Phag<span>wara</span>  Punjab</p>
                        <p>Jan 2023</p>
                    </div>
                    <div className='social_links'>
                        <a href="https://www.facebook.com/VenturePact" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2FVenturePact" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/venturepact" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a href="https://www.instagram.com/explore/tags/venturepact/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
