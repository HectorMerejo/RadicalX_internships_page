import { useState } from 'react'
import LeftMenuBar from './components/LeftMenuBar'
import Internship_insight from './components/Internship_insight'
import InternshipStatistics from './components/InternshipStatistics'
import Title from './components/MainTitle'
import TopNavBar from './components/topNavBar'
import Mid from './components/mid'
import Tabs from './components/tabs'
import '../App.css'
import {Routes, Route} from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='mainDiv'>
      <div className='leftDiv'>
        <LeftMenuBar />
      </div>
      <div className='rightDiv'>
        <Title />
        <Internship_insight />
        <InternshipStatistics />
      </div>
    </div>
  )
}

const CreateInternshipPage = () => {
  return(
      <div>
        <TopNavBar />
        <Mid />
        <Tabs />
      </div>
  )
}

 
export default function App() {
  return (
  <div>
    <div className="maintitle">     
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/createInternshipPage' element={<CreateInternshipPage />} />
      </Routes> 
    </div>
  </div> 
  )
}


