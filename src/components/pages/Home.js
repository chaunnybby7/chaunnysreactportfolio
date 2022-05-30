import React from 'react';
import { Button, Card } from 'react-bootstrap';
import TypeWriterEffect from "react-typewriter-effect";



export default function Home({ currentPage, handlePageChange }) {
  return (

    <div>

      <Card className="text-center">
  <Card className="card-header">Welcome to Yilin's React Portfolio 4.0+</Card>
  <Card.Body>
<Card.Text>     
<h1><b>YiLin Ong</b>.</h1> <i>aka</i> <b>Chaunny.</b> <br/ ><br />
In Progress: 

<div className="Typew">
<TypeWriterEffect
startDelay={1000}
cursorColor="pink"
multiText={[
  'Full Stack Developer',
  'Software Engineer',
  'Front-End Web Developer',
  'Peacemaker ☮️✌🏻'
]}
multiTextDelay={1000}
typeSpeed={30}
/></div><br / >
      Currently based in NYC. 
   </Card.Text>

   <a
   href="#about"
   onClick={() => handlePageChange('About')}
   className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
 >
   About
 </a>

  </Card.Body>
<br /><br /><br /><br /><br /><br /><br /><br />

</Card>

      
    </div>

  );
    }
