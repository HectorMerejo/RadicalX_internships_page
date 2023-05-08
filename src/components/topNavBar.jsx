import { useState } from 'react'
import backArrow from '../assets/arrow-left.png'
import nextArrow from '../assets/arrow-right.png'
import {Link} from 'react-router-dom';

export default function TopNavBar(){
  return(
    <div>
      <div className="topDiv">
        <div>
          <Link to='/'>
            <button>
              <img className="backarrow" src={backArrow} alt="backarrow"/>
              <span className="backArrow--title">Back</span>
            </button>
          </Link>
        </div>

        <div className="topnavbar--mainTitle">
          <h1 className="topnavbar--mainTitle--h1">Add New Internship</h1>
        </div>

        <div className="backarrow--div">
          <Link>
            <button>
              <img className="nextarrow" src={nextArrow} alt="nextarrow"/>
              <span className="nextArrow--title">Continue to Next Step</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
    
  )
}