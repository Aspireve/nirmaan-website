'use client';

import { Navbar } from '../components';
import StarsCanvas from '../components/Starscanvas';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body className="overflow-y-scroll scrollbar-hide">
      <div className="bg-primary-black overflow-hidden">
        <div style={{ zIndex: 5 }}>
          <StarsCanvas />
          <Navbar />
        </div>
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
