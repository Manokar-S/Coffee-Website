import React from 'react'
import { Element} from 'react-scroll'
import "./Coffeecontainer.css";
import coffeeImage from '../Images/cofeeback22.jpg';
import backImage from '../Images/Bac-image.jpg';
import flower from '../Images/Coofeeconatiner img-4.jfif';
import  Coofeeconatiner11 from '../Images/Coofeeconatiner img-2.jfif';
import  Coofeeconatiner6 from '../Images/Coofeeconatiner img-10.jfif';
import  Coofeeconatiner12 from '../Images/Coofeeconatiner12.jfif';

import  Coofeeconatiner1 from '../Images/Coofeeconatiner img-3.jfif';
import  Coofeeconatiner3 from '../Images/Coofeeconatiner img-1.jfif';


const Coffeecotiner = () => {
  return (
    <Element className='Coffee'>
  <div className='coffeecontainer'>
    <div className='contentalign'>
      <h2>Welcome to Our Cozy Coffee Shop</h2>
    </div>
    <div className='contentalign'>
      <p>Indulge in the finest selection of coffee and pastries at our cozy coffee shop. Join our community of coffee lovers from around the world.</p>
    </div>
    <div className='imgcontent'>
    <div className='frstImages'>
    <img src={Coofeeconatiner1} alt='Coffee Shop'className="coffee-image" />
    <img src={Coofeeconatiner3} alt='Coffee Shop' className="coffee-image" />
    </div>
    <div className='secondImage'>
    <img src={flower} alt='Coffee Shop' className="second-image" />
</div>
<div className='lastImages'>
<div className='thirdImage'>
    <img src={Coofeeconatiner11} alt='Coffee Shop'className="third-image" />
    <img src={Coofeeconatiner6} alt='Coffee Shop' className="third-image" />
    </div>
    <img src={Coofeeconatiner12} alt='Coffee Shop' className="fourth-image" />

    </div>
    {/* <div className='imgcontent'>
    <img src={coffeeImage} alt='Coffee Shop' id="coffee-image" />
    <img src={coffeeImage} alt='Coffee Shop' id="coffee-image"/>
    <img src={coffeeImage} alt='Coffee Shop' id="coffee-image"/>
    <img src={coffeeImage} alt='Coffee Shop' id="coffee-image"/>

    </div> */}
  </div>
  </div>
</Element>
  )
}

export default Coffeecotiner
