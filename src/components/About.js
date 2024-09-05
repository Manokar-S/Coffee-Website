import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Element } from 'react-scroll';
import './About.css'; // Import CSS file for styling
import { BsBusFrontFill } from "react-icons/bs";


const About = () => {
  return (
    <Element name='about'>
    <div className='abtcontainer'>
    <h1 className='feature'>Features</h1>
    <h1 className='ourfeature'>Our Best Features</h1>
    <div className='secndcotainer'>
      <Card  className="card">
        <div className="icon-container">
          <FaUser className="user-icon" />
        </div>
        <Card.Body>
          <Card.Title>Free Shopping</Card.Title>
          <Card.Text>
          Enjoy the convenience of having your favorite coffee blends delivered right to your doorstep. We offer free shipping on all orders, ensuring you never run out of your morning pick-me-up.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card  className="card">
            <div className="icon-container">
              <FaUser className="user-icon" />
            </div>
            <Card.Body>
              <Card.Title>Organic Certified</Card.Title>
              <Card.Text>We believe in offering only the best to our customers. That's why all our coffee beans are sourced from organic farms, ensuring sustainability and quality in every sip.

              </Card.Text>
            </Card.Body>
          </Card>
          <Card  className="card">
            <div className="icon-container">
              <FaUser className="user-icon" />
            </div>
            <Card.Body>
              <Card.Title>High Quality</Card.Title>
              <Card.Text>
              From bean to cup, we prioritize quality at every step of the process. Our beans are carefully selected, roasted to perfection, and expertly brewed to bring out the rich flavors and aromas in every cup.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card  className="card">
            <div className="icon-container">
              <FaUser className="user-icon"/>
            </div>
            <Card.Body>
              <Card.Title>Proper Roasting</Card.Title>
              <Card.Text>
              Our master roasters meticulously roast each batch of coffee beans to unlock their full potential. With precision and expertise, we ensure that every bean is roasted to perfection, resulting in a smooth.
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
    </div>
    </Element>
  )
}

export default About
