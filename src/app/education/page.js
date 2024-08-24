import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faUniversity, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/education.css';
import Image from 'next/image';
import lpu from "../../../assets/lpu.jpg"
import mpc from "../../../assets/mpc.jpg"
import pcst from "../../../assets/pcst.png"
import rnhs from "../../../assets/rnhs.jpg"


export default function EducationPage() {
    return (
        <div className="education_container">
            <h1 className="education_head">Edu<span>cat</span>ion</h1>
            <div className='education_cards'>
                {/* 1st card */}
                <div className='card_container'>
                    <div className="card">
                        <div className="first-card">
                            <Image
                                src={lpu}
                                alt="profile pic"
                                className="profile-img"
                            />
                        </div>
                        <div className="back-card"></div>
                        <div className="thid-card"></div>
                    </div>
                    <div className='card_content_text'>
                        <h2 className="card_title"><FontAwesomeIcon icon={faGraduationCap} className='education_icon' /> Master of <span>Computer</span> Applications <span>(MCA)</span></h2>
                        <h3 className="institution-name"><FontAwesomeIcon icon={faUniversity} className='education_icon' /> Lovely Professional University</h3>
                        <p className="year"><FontAwesomeIcon icon={faCalendarAlt} className='education_icon' />Graduated: <span>2023</span></p>
                        <p className='para_education'>

                            Lovely Professional University (LPU)
                            is a private university located in Phagwara,
                            Punjab, India. Established in 2005,
                            LPU offers a wide range of undergraduate,
                            postgraduate, and doctoral programs across
                            various fields including engineering, business,
                            design, and social sciences. Known for its modern campus,
                            state-of-the-art facilities, and emphasis on research and
                            industry connections, LPU attracts students from across
                            India and around the world.
                        </p>
                        <div className='social_links'>
                            <a href="https://www.facebook.com/LPUUniversity" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                            </a>
                            <a href="https://x.com/lpuuniversity" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="icon" />
                            </a>
                            <a href="https://in.linkedin.com/school/lovely-professional-university/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            </a>
                            <a href="https://www.instagram.com/lpuuniversity" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* 2nd card */}
                <div className='card_container second_card'>
                    <div className="card">
                        <div className="first-card">
                            <Image
                                src={mpc}
                                alt="profile pic"
                                className="profile-img"
                            />
                        </div>
                        <div className="back-card"></div>
                        <div className="thid-card"></div>
                    </div>
                    <div className='card_content_text'>
                        <h2 className="card_title"><FontAwesomeIcon icon={faGraduationCap} className='education_icon' /> B.Sc. <span>(Hons.)</span> in Computer Science <span>(BSC)</span></h2>
                        <h3 className="institution-name"><FontAwesomeIcon icon={faUniversity} className='education_icon' /> MPC Autonomous College</h3>
                        <p className="year"><FontAwesomeIcon icon={faCalendarAlt} className='education_icon' />Graduated: <span>2021</span></p>
                        <p className='para_education'>

                            Maharaja Purna Chandra (MPC) Autonomous College in Baripada,
                            Odisha, is one of the premier institutions in the state.
                            Established in 1948, the college has earned a reputation for academic
                            excellence and holistic education. Affiliated with North Orissa University,
                            it offers a variety of undergraduate and postgraduate courses across disciplines,
                            including arts, science, and commerce. The college enjoys autonomous status,
                            providing it with academic flexibility to design its curriculum and conduct
                            its own examinations. MPC College is a cornerstone of higher education in Odisha,
                            nurturing generations of scholars and professionals.
                        </p>
                        <div className='social_links'>
                            <a href="https://www.facebook.com/MpcAutoCollege" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="icon" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* 3rd card */}
                <div className='card_container'>
                    <div className="card">
                        <div className="first-card">
                            <Image
                                src={pcst}
                                alt="profile pic"
                                className="profile-img"
                            />
                        </div>
                        <div className="back-card"></div>
                        <div className="thid-card"></div>
                    </div>
                    <div className='card_content_text'>
                        <h2 className="card_title"><FontAwesomeIcon icon={faGraduationCap} className='education_icon' /> 12th <span>Science</span> </h2>
                        <h3 className="institution-name"><FontAwesomeIcon icon={faUniversity} className='education_icon' /> Pradeep College of Science and Technology</h3>
                        <p className="year"><FontAwesomeIcon icon={faCalendarAlt} className='education_icon' />PassOut: <span>2018</span></p>
                        <p className='para_education'>

                            Lovely Professional University (LPU)
                            is a private university located in Phagwara,
                            Punjab, India. Established in 2005,
                            LPU offers a wide range of undergraduate,
                            postgraduate, and doctoral programs across
                            various fields including engineering, business,
                            design, and social sciences. Known for its modern campus,
                            state-of-the-art facilities, and emphasis on research and
                            industry connections, LPU attracts students from across
                            India and around the world.
                        </p>
                        <div className='social_links'>
                            <a href="https://www.facebook.com/profile.php?id=255720591268501&_rdr" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="icon" />
                            </a>
                            <a href="https://in.linkedin.com/in/jayadip-ghosh-87152121" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            </a>
                            <a href="https://www.instagram.com/explore/locations/249260762207298/pradeep-college-of-science-technology/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* 4rd card */}
                <div className='card_container second_card'>
                    <div className="card">
                        <div className="first-card">
                            <Image
                                src={rnhs}
                                alt="profile pic"
                                className="profile-img"
                            />
                        </div>
                        <div className="back-card"></div>
                        <div className="thid-card"></div>
                    </div>
                    <div className='card_content_text'>
                        <h2 className="card_title"><FontAwesomeIcon icon={faGraduationCap} className='education_icon' /> Hi<span>gh Sc</span>hool  <span>(10th)</span></h2>
                        <h3 className="institution-name"><FontAwesomeIcon icon={faUniversity} className='education_icon' /> Raghunath High School</h3>
                        <p className="year"><FontAwesomeIcon icon={faCalendarAlt} className='education_icon' />Matric: <span>2016</span></p>
                        <p className='para_education'>
                            Raghunath High School, Raikama is a prominent educational institution located in Raikama,
                            Odisha. Dedicated to serving the local community,
                            the school offers quality education at the secondary level,
                            focusing on providing a strong foundation in various subjects.
                            With a commitment to nurturing young minds and fostering academic growth,
                            Raghunath High School plays a crucial role in the educational development of
                            students in the region.
                        </p>
                        <div className='social_links'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="icon" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
