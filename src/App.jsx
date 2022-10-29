import { useState } from 'react'
import LeftMenuBar from './components/LeftMenuBar'
import Internship_insight from './components/Internship_insight'
import MainTitle from './components/MainTitle'
import InternshipStatistics from './components/InternshipStatistics'
import '../App.css'

export default function App() {
  return (
    <div className='mainDiv'>
      <div className='leftDiv'>
        <LeftMenuBar />
      </div>
      <div className='rightDiv'>
        <MainTitle />
        <Internship_insight />
        <InternshipStatistics />
      </div>
    </div>
    
  )
}