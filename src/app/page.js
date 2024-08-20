"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../../styles/home.css';
import profilePic from "../../assets/profilebg.png"

export default function HomePage() {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [totypeIndex, setTotypeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const totype = ["Frontend Developer", "UI Developer", "Web Designer", "UX/UI Designer"];

  const delayTyping_char = 200;
  const delayErasing_text = 100;
  const delayBeforeErasing = 3000;

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (charIndex < totype[totypeIndex].length) {
        timeout = setTimeout(() => {
          setTypedText((prev) => prev + totype[totypeIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, delayTyping_char);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => setCharIndex(charIndex - 1), delayBeforeErasing);
      }
    } else {
      if (charIndex >= 0) {
        timeout = setTimeout(() => {
          setTypedText(totype[totypeIndex].substring(0, charIndex));
          setCharIndex((prev) => prev - 1);
        }, delayErasing_text);
      } else {
        setIsTyping(true);
        setTotypeIndex((prev) => (prev + 1) % totype.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, totypeIndex]);

  return (
    <div className="home_container">
      <div className='hero_content'>
        <div className='header_text'>
          <h1>Hi There! <span className="wave">👋</span></h1>
          <p className="name_text">I am Girija Shankar Mohanta,</p>
          <p className="text_type">And I am a <span id="typed">{typedText}</span></p>
        </div>

        <div className='profile_image'>
          <Image
            src={profilePic}
            alt="profile pic"
            className="profile-img"
          />
        </div>
      </div>

      <div className='introduction'>
        <h2 className='introduction_text'>let me <span>introduce</span> myself</h2>
        <p className='introduction_para'>With <span>1.5+</span> years of experience in frontend and web development,
          I specialize in crafting dynamic and responsive user interfaces using <span>React,
          Angular, Next.js and EJS</span>.
          My expertise extends to backend technologies,
          including <span>Node.js, Express, and Mongoose,</span>
          allowing me to build <span>full-stack</span> applications
          that are both robust and scalable.
          I hold an <span>MCA</span> degree from Lovely Professional University, Punjab,
          which has provided me with a solid foundation in <span>software development</span>.
          I am passionate about creating seamless, high-performance web experiences
          and am dedicated to staying updated with the latest industry trends
          and <span>technologies</span>.</p>
      </div>
    </div>
  );
}
