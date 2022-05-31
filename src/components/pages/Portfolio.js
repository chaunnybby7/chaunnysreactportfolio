import React from 'react';
import { Button, Card, Row } from 'react-bootstrap'
import socialnetworkapi from '../../components/assets/socialnetworkapi.png';
import manifest from '../../components/assets/manifest.png';
import lashbar from '../../components/assets/lashbar.png';
import funquiz from '../../components/assets/funquiz.png';

export default function Blog() {
  return (
    <div>
<br/><br/><br/><br/><br/><br/>

<Row xs={1} md={2} className="g-4">

<Card style={{ width: '500px' }}>
<img src={socialnetworkapi} />
<Card.Body><center>
  <Card.Title><b>Social Network API</b></Card.Title></center>
  <Card.Text>
  API for a social network web application. Users can add or remove friends, create/update/delete thoughts, and react to friends' thoughts. Express.js for routing, the MongoDB database, and Mongoose ODM are utilized for this project.
  </Card.Text>
  <button className="button-2" onClick={() => window.open( 'https://github.com/chaunnybby7/yilin-socialnetworkapi')} >Github</button>
  <button className="button-2" onClick={() => window.open( '')} >No Deployed Link</button>
</Card.Body>
</Card>

<Card style={{ width: '500px'}}>
<br />
<img src={manifest} />
<Card.Body><center>
<Card.Title><b>PWA Text Editor</b></Card.Title></center>
    <Card.Text>
    Built a text editor that runs in the browser. 

    The app will be a single-page application that meets the PWA criteria. 
    
    
    It will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. 
    
    The application will also function offline.
    </Card.Text>
    <button className="button-2" onClick={() => window.open( 'https://github.com/chaunnybby7/pwa-texteditor')} >Github</button>
    <button className="button-2" onClick={() => window.open( 'https://dry-bayou-86726.herokuapp.com/')} >Deployed</button>
  </Card.Body>
</Card>
</Row>
<Row xs={1} md={2} className="g-4">
<Card style={{ width: '500px' }}>
<img src={lashbar} />
<Card.Body><center>
<Card.Title><b>Lash Bar</b></Card.Title></center>
    <Card.Text>
    I have built a fictionary business website landing page using HTML and CSS.

    I decided to go with a Lash Extensions Salon named Chaunette Lash.
    
    The website is has a pink color theme and minimalistic design.
    
  
    </Card.Text>
    <button className="button-2" onClick={() => window.open( 'hhttps://github.com/chaunnybby7/lashbar')} >Github</button>
    <button className="button-2" onClick={() => window.open( 'https://chaunnybby7.github.io/lashbar/')} >Deployed</button>
  </Card.Body>
</Card>

<Card style={{ width: '500px' }}>
<img src={funquiz} />
<Card.Body><center>
<Card.Title><b>Fun Quiz Generator</b></Card.Title></center>
    <Card.Text>
    I built a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.


    </Card.Text>
    <button className="button-2" onClick={() => window.open( 'https://github.com/chaunnybby7/funquizgenerator')} >Github</button>
    <button className="button-2" onClick={() => window.open( 'https://chaunnybby7.github.io/funquizgenerator/')} >Deployed</button>
  </Card.Body>
</Card>

    </Row>
    </div>
  );
}
