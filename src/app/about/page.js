import "../../../styles/about.css";
import Image from "next/image";
import profile from "../../../assets/profile.png";
export default function AboutPage() {
    return (
      <div className="about-container">
        <div className="about-header">
          <h1>Ab<span>out M</span>e</h1>
        </div>
        <div className="about-content">
          <div className="about-image">
          <Image src={profile} alt="Girija Shankar Mohanta" className="about_image" />
            
          </div>
          <div className="about-text">
            <p>
              Hello! I am <strong>Girija Shankar Mohanta</strong>, a passionate and driven frontend developer with over 1.5 years of professional experience. I hold a Masters degree in Computer Applications (MCA) from Lovely Professional University (LPU), Punjab.
            </p>
            <p>
              I specialize in crafting visually stunning, user-friendly web applications. Currently, I am working as a frontend developer at <strong>Manthan IT Solution</strong>, where I continue to hone my skills in creating dynamic, responsive, and impactful digital experiences.
            </p>
            <p>
              My journey in web development has been fueled by a desire to constantly learn and innovate. I thrive in environments that challenge me to push the boundaries of technology and design.
            </p>
            <p>
              Feel free to reach out to me at <a href="mailto:girijashankarmohanta11@gmail.com">girijashankarmohanta11@gmail.com</a> for any collaborations, opportunities, or just to connect.
            </p>
          </div>
        </div>
      </div>
    );
}
