import React from 'react';
import { Card, FormControl, InputGroup, Form, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { library } from "@fortawesome/fontawesome-svg-core";


export default function Contact() {
  return (
    <div>
    <Row md={1} className="g-3">
      <center><h1>Leave A Message </h1></center>
      <Form>
      <InputGroup className="mb-3">
  <InputGroup.Text>First and Last name</InputGroup.Text>
  <FormControl aria-label="First name" placeholder='First'/>
  <FormControl aria-label="Last name" placeholder='Last' />
</InputGroup>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="p">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <InputGroup>
    <InputGroup.Text>Message:</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" placeholder='Leave a message! 😇 ' />
  </InputGroup><br/>
  <center>
  <Button className='button' type="submit">
    Submit
  </Button></center>
</Form></Row>

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
