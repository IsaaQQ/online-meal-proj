import React from 'react'
import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div 
    className='banner d-flex justify-content-center justify-content-md-start align-items-center px-3'>
        <div 
        className= "text-start">
            <h1 className = "text-success display-5 fw-bold">Healthy Foods</h1>
            <h1 className ="fw-light">Explore different meals</h1>
            <button className="btn btn-success">
                <a href= "#below" className="text-decoration-none text-white fw-light">See More Below</a>
            </button>
        </div>
    </div>
  )
}

export default Banner
