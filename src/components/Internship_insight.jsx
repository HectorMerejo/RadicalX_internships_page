import { useState } from 'react'
import calendar from '../assets/calendar-2.png'
import funnel from '../assets/Funnel.png'

export default function Internships(){
  return(
    <div className='middiv--rightdiv'>
      <div className='middiv--insights'>
        <h5>Internship Insights</h5>
        <p>In the eighteenth century the 
          German philosopher Immanuel Kant 
          developed a theory of knowledge 
          in which knowledge about space 
          can be both a priori and synthetic.
        </p>

      </div>
      <div className='middiv--headerdiv'>

        <button className='button1'>This week</button>
        <button className='button2'>This month</button>
        <button className='button3'><img src={calendar} alt="calendar" />Select dates</button>
        <img src={funnel} alt="funnel" />
      </div>
      
    </div>
  )
}