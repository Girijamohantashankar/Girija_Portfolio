"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../../styles/NavBar.css';

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
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
