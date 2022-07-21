import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import TypeWriterEffect from "react-typewriter-effect";
import { NavLink, Switch, Route } from 'react-router-dom';




export default function Home(props) {


  return (

    <div>

      <Card className="text-center">
  <Card className="card-header">Welcome to Yilin's React Portfolio 4.0+</Card>
  <Card.Body>
<Card.Text>     
<h1><b>YiLin Ong</b>.</h1> <i>aka</i> <b>Chaunny.</b> <br/ ><br />
Aspiring  

<div className="Typew">
<TypeWriterEffect
startDelay={1000}
cursorColor="pink"
multiText={[
  'Digital Marketing Specialist',
  'Full Stack Developer',
  'Software Engineer',
  'Front-End Web Developer',
  'Peacemaker ☮️✌🏻',
  'Good Dog Mom🐶🥰'
]}
multiTextDelay={1000}
typeSpeed={30}
/></div><br / >
      Currently based in NYC. 
   </Card.Text>
   
   <br /> <br />
   <button className='button' onClick={ 
     ()=> { props.setCurrentPage('About') }
   }
  >Learn More</button>


  </Card.Body>


  
<br /><br /><br /><br /><br />

</Card>
      

    </div>

  );
    }
