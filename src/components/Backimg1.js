import React from 'react';
import './Backimg.css'; // Import CSS file for styling
import Header from '../Header';
import { Element } from 'react-scroll';
import { Button } from 'react-bootstrap';

const Backimg1 = () => {
  return (
    <Element name='home'>
      <div className='Top-Bacimg'>
        <Header />
        <div className='content'>
          <h1 className='heading'>Welcome!</h1>
          <h1 className='frstheading'>Enjoy our <span>Coffee</span></h1>
          <h1 className='frstheading'>Before Your Activity</h1>
          <Button variant="primary" className='ordrbtn'>Order now</Button>
          <Button variant="primary" className='ordrbtn'>About us</Button>
        </div> 
      </div>
    </Element>
  )
}

export default Backimg1;
