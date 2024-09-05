import React from 'react';
import './Shop.css'; 
import  Coofeeconatiner1 from '../Images/Coofeeconatiner img-3.jfif';
import  Coofeeconatiner3 from '../Images/Coofeeconatiner img-1.jfif';
import { Element } from 'react-scroll';

function Shop() {
  return (
    <Element name='Shop'>
<div className='fullContent'>
    <div className="coffee-shop-container">
      <h1>Popular Menus</h1>
      <p>Welcome to our cozy coffee shop. Sit back, relax, and enjoy our delightful brews!</p>

      {/* First row */}
      <div className="coffee-name-container">
        <div className="half-container">
          <img src={Coofeeconatiner1} alt='Coffee Shop' className="icon" />
          <h1 className='headingfrst'>Cappuccino</h1>
          {/* <h1 className='amount'>$20</h1> */}
        </div>
        <div className="half-container">
          <img src={Coofeeconatiner3} alt='Coffee Shop' className="icon" />
          <h1 className='headingsecnd'>Latte</h1>
          {/* <h1 className='amount'>$20</h1> */}
        </div>
      </div>
    <div className="coffee-name-container">
      <div className="half-container">
          <img src={Coofeeconatiner1} alt='Coffee Shop' className="icon" />
          <h1 className='headingfrst'>Espresso</h1>
          {/* <h1 className='amount'>$20</h1> */}
        </div>
        <div className="half-container">
          <img src={Coofeeconatiner3} alt='Coffee Shop' className="icon" />
          <h1 className='headingsecnd'>Mocha</h1>
          {/* <h1 className='amount'>$20</h1> */}
        </div>
        </div>
        <div className="coffee-name-container">
      <div className="half-container">
          <img src={Coofeeconatiner1} alt='Coffee Shop' className="icon" />
          <h1 className='headingfrst'>Americano</h1>
          {/* <h1 className='amount'>$20</h1> */}
        </div>
        <div className="half-container">
          <img src={Coofeeconatiner3} alt='Coffee Shop' className="icon" />
          <h1 className='headingsecnd'>Macchiato</h1>
          {/* <h1 className='amount'>$20</h1> */}
        </div>
        </div>
    </div>
    </div>
    </Element>
  );
}

export default Shop;
