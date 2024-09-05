import React from 'react'
import "./Blog.css";


const Blog = () => {
  return (
    <div className='blogContainer'>
    <div className='blogContent'>
    <h1 class="sm:text-5xl">BrewAlchemy</h1>
    <p>Indulge in the art of BrewAlchemy, where science meets <br/>flavor and every cup is a masterpiece. </p>
    <div className="button-row">
          <button className="btn">Discover Our Menu</button>
          <button className="btn alt">Find a Location</button>
        </div>
        </div>
    </div>
  )
}

export default Blog
