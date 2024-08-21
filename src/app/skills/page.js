import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAngular, faNodeJs, faHtml5, faCss3Alt, faBootstrap, faGithub, faGitlab, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import FirebaseLogo from '../../../assets/firebase.png';
import '../../../styles/skills.css';
import Image from 'next/image';

export default function SkillsPage() {
    return (
        <div className='skill_container'>

            <div className='tech_text'>
                <h3>Techn<span>ical</span> Skills</h3>
            </div>


            <div className='skill_cards'>
                <div className='skill_card animation_card1'>
                    <FontAwesomeIcon icon={faReact} className="skill_icon" />
                    <p>React JS</p>
                </div>
                <div className='skill_card animation_card2'>
                    <FontAwesomeIcon icon={faAngular} className="skill_icon" />
                    <p>Angular JS</p>
                </div>
                <div className='skill_card animation_card1'>
                    <FontAwesomeIcon icon={faReact} className="skill_icon" />
                    <p>Next JS</p>
                </div>
                <div className='skill_card animation_card2'>
                    <FontAwesomeIcon icon={faNodeJs} className="skill_icon" />
                    <p>Node JS</p>
                </div>
                <div className='skill_card animation_card1'>
                    <FontAwesomeIcon icon={faJsSquare} className="skill_icon" />
                    <p>JavaScript</p>
                </div>
                <div className='skill_card animation_card2'>
                    <FontAwesomeIcon icon={faHtml5} className="skill_icon" />
                    <p>HTML5</p>
                </div>
                <div className='skill_card animation_card1'>
                    <FontAwesomeIcon icon={faCss3Alt} className="skill_icon" />
                    <p>CSS3</p>
                </div>
                <div className='skill_card animation_card2'>
                    <FontAwesomeIcon icon={faBootstrap} className="skill_icon" />
                    <p>Bootstrap</p>
                </div>
                <div className='skill_card animation_card1'>
                    <FontAwesomeIcon icon={faDatabase} className="skill_icon" />
                    <p>MongoDB</p>
                </div>
                <div className='skill_card animation_card2'>
                    <FontAwesomeIcon icon={faGithub} className="skill_icon" />
                    <p>GitHub</p>
                </div>
                <div className='skill_card animation_card1'>
                    <FontAwesomeIcon icon={faGitlab} className="skill_icon" />
                    <p>GitLab</p>
                </div>
                <div className='skill_card animation_card2'>
                    <Image src={FirebaseLogo} alt="Firebase Logo" className="skill_icon icon_img" />
                    <p>Firebase</p>
                </div>
            </div>
        </div>
    );
}
