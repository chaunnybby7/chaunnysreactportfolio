import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { Card, FormControl, InputGroup, Form, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home setCurrentPage={setCurrentPage}/>;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
    return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <center>

<br/ > <br/ >
<Card className="footer">
<br/ >  <br/ > 

<FontAwesomeIcon icon={faLinkedin} onClick={() => window.open( 'https://www.linkedin.com/in/chauntelleong/')} size="2x" className='social' />
<FontAwesomeIcon icon={faGithub}  onClick={() => window.open( 'https://github.com/chaunnybby7')} size="2x" className='social' />
<FontAwesomeIcon icon={faEnvelope}  onClick={() => window.location = 'mailto:yong@nyit.edu'} size="2x" className='social' />

</Card>

</center>
    </div>
  );
}
