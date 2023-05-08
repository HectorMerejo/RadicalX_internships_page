import { useState } from 'react'
import internDesc from '../assets/internDesc.png'
import internGuide from '../assets/internGuide.png'
import survey from '../assets/survey.png'
import settings from '../assets/settings.png'
import {Link} from 'react-router-dom';

export default function Mid(){
  return(
      <div className="mid--navbar">
        <div>
          <Link to='/'>
            <button>
              <img className="midBar--titleimg1" src={internDesc} alt="internDesc"/>  
            </button>
          </Link>
        </div>

        <div>
        <Link to='/'>
            <button>
            <img className="midBar--titleimg2" src={internGuide} alt="internGuide"/>
            </button>
          </Link>
        </div>

        <div>
        <Link to='/'>
            <button>
            <img className="midBar--titleimg3" src={survey} alt="survey"/>
            </button>
          </Link>
        </div>

        <div>
        <Link to='/'>
            <button>
            <img className="midBar--titleimg4" src={settings} alt="settings"/>
            </button>
          </Link>
        </div>
      </div>
  )
}