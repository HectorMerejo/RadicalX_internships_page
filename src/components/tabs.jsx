import { useState } from 'react'
import menu from '../assets/menu.png'
import smallArrowRight from '../assets/smallArrowRight.png'
import addsquare from '../assets/purple-add-square.png'
import {Link} from 'react-router-dom';

export default function Tabs(){
  return(
    <div>
      <ul className="tabs_menu">
            <li><img src={menu} alt="menu" /><div><button>Catergory</button><img src={smallArrowRight} alt="small arrow" /></div></li>
            <li><img src={menu} alt="menu" /><div><button>Description</button><img src={smallArrowRight} alt="small arrow" /></div></li>
            <li><img src={menu} alt="menu" /><div><button>Location</button><img src={smallArrowRight} alt="small arrow" /></div></li>
            <li><img src={menu} alt="menu" /><div><button>Benefits</button><img src={smallArrowRight} alt="small arrow" /></div></li>
            <li><img src={menu} alt="menu" /><div><button>Intro Video</button><img src={smallArrowRight} alt="small arrow" /></div></li>
            <li><img src={menu} alt="menu" /><div><button>Mentor Details</button><img src={smallArrowRight} alt="small arrow" /></div></li>
            <li><img src={menu} alt="menu" /><div><button>Recommended Roles</button><img src={smallArrowRight} alt="small arrow" /></div></li>
            <li><img src={menu} alt="menu" /><div><button>Web Links & Resources</button><img src={smallArrowRight} alt="small arrow" /></div></li>
      </ul>
           <div className="tabs--addmore"><img src={addsquare} alt="addsquare" /><button>Add More</button></div>
    </div>
  )
}