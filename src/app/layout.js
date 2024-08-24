'use client'; 

import './globals.css';
import NavBar from './NavBar';
import Customloader from './customloader';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Girija Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <link rel="icon" href="/assets/profile.png" />
      </head>
      <body>
        {isLoading ? (
          <Customloader />  
        ) : (
          <>
            <NavBar />
            <main>{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
