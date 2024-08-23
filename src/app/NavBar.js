"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../../styles/NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';   
import { faHome } from '@fortawesome/free-solid-svg-icons';   
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'; 
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 


export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo_container">
        <div className="logo">
          <Link href="/" className="logo_text">
          <FontAwesomeIcon icon={faUser} className='nav_icon'/>
            Girija Shankar
          </Link>
        </div>

        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
          <FontAwesomeIcon icon={faHome}  className='nav_icon'/>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
          <FontAwesomeIcon icon={faInfoCircle} className='nav_icon'/>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>
          <FontAwesomeIcon icon={faProjectDiagram} className='nav_icon'/>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
          <FontAwesomeIcon icon={faEnvelope} className='nav_icon'/>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
