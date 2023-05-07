import { useState } from 'react'
import addsquare from '../assets/add-square.png'
import {Link} from 'react-router-dom';

export default function Title(){
  return(
    <div className="maintitle">
      <h1 className="maintitle--h1">Internships</h1>
        <Link to='/createInternshipPage'>
          <button className="maintitle--button"> 
              <img src={addsquare} alt="square" /> 
              <span>Create New Internship</span> 
          </button> 
        </Link>
    </div>   
  )
}
