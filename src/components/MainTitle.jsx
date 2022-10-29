import { useState } from 'react'
import addsquare from '../assets/add-square.png'

export default function Title(){
  return(
    <div className="maintitle">
      <h1 className="maintitle--h5">Internships</h1>
      
      <button className="maintitle--button"> 
        <img src={addsquare} alt="square" /> 
        <span>Create New Internship</span> 
      </button>

    </div>
     
  )
}