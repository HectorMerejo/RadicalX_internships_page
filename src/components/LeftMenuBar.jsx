import { useState } from 'react'
import logo from '../assets/radicalXlogo.png'
import dashboard from '../assets/dashboard.png'
import book from '../assets/book.png'
import briefcase from '../assets/briefcase.png'
import medalstar from '../assets/medalstar.png'
import setting2 from '../assets/setting2.png'
import rectangle from '../assets/rectangle.png'

export default function LeftMenuBar() {
  return (
    <div className="leftmenu--div">
        <img className="imgLogo" src={logo} alt="Radical X Logo"/>

        <div>
          <ul className="menu_left">
            
            <li><button><img src={dashboard} alt="dashboard" />Dashboard</button></li>
            <li><button><img src={book} alt="book" />Apprenterships</button></li>
            <li><button><img src={briefcase} alt="briefcase" />Intersnships</button></li>
            <li><button><img src={medalstar} alt="medalstar" />Jobs</button></li>
            <li><button><img src={setting2} alt="setting2" />Settings</button></li>
          </ul>
        </div>
        

        <ul className="accountName">
          <li><img src={rectangle} alt="rectangle"/>Adam Scott</li>
        </ul>

    </div>
  )
}
