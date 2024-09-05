import React from 'react'
import { Element } from 'react-scroll'
import "./Product.css";
import { CgLogIn } from "react-icons/cg";

const Product = () => {
  return (
    
    <div className='productCoatiner'>
    <section>
    <h2>Book A Table</h2>

      <form className='ReservatioForm'>
        <div className='nametext'>
          <input type='text' placeholder='Your Name' className='formInput'/>
        </div>
        <div className='emailtext'>
          <input type='text' placeholder='Your Email Address' className='formInput'/>
        </div>
        <div className='phnText'>
          <input type='text' placeholder='Your Phone' className='formInput'/>
        </div>
        <div className='dateText'>
          <input type='text' placeholder='Date Ex:DD/MM/YYYY' className='formInput'/>
          {/* <input type="time" /> */}
        </div>
        <div className='timeText'>
          <input type='text' placeholder='Time Ex:01:20PM' className='formInput'/>
        </div>
        <div className='peopleText'>
          <input type='text' placeholder='Number of People' className='formInput'/>
        </div>
        <div className='messageText'>
          <textarea placeholder='Your Meaasge' className='formInput'/>
        </div>
        <button><CgLogIn/>Book A Table</button>
      </form>
    </section>
      
    </div>
  
  )
}

export default Product
