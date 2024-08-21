import './globals.css';
import NavBar from './NavBar';


export const metadata = {
  title: 'Girija Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/assets/profile.png" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
