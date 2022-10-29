import { useState } from 'react'
import row from '../assets/Row.png'
import chart from '../assets/chart.png'
import profile2 from '../assets/profile-2user.png'
import more2 from '../assets/more-2.png'
import downarrow from '../assets/arrow-square-down.png'

export default function InternshipStatistics(){
  return (
    <div className="main--tablediv">
      <table cellspacing="0">
        <tr height="56px" className="header--tr">
          <th width="250px" > Internship Title <img src={downarrow} alt="downarrow" /> </th>
          <th width="200px" > Completeion Period <img src={downarrow} alt="downarrow" /> </th>
          <th width="200px" > Total Enrolled <img src={downarrow} alt="downarrow" /> </th>
          <th width="250px" > Qualified Candidates <img src={downarrow} alt="downarrow" /> </th>
          <th width="140px" className="td--actions">Actions</th>
        </tr>
        <tr height="96px" className="table--tr">
          <td width="195px"><h5 className="td--h5">Product Design GVI</h5><div className='td--p'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div></td>
          <td width="137px"><h5 className="td--h5-2">120 days</h5><h6 className="td--h6">(created on 10/12/2021)</h6></td>
          <td className='td--num'><div>20,000</div></td>
          <td className="th--img"><img src={row} alt="row"  /></td>
          <td className="th--button"> 
            <button><img src={chart} alt="chart" /></button> 
            <button><img src={profile2} alt="profile" /></button> 
            <button><img src={more2} alt="more" /></button>
          </td>
        </tr>
        <tr height="96px" className="table--tr">
          <td width="195px"><h5 className="td--h5">Product Design GVI</h5><div className='td--p'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div></td>
          <td width="137px"><h5 className="td--h5-2">120 days</h5><h6 className="td--h6">(created on 10/12/2021)</h6></td>
          <td className='td--num'><div>20,000</div></td>
          <td className="th--img"><img src={row} alt="row"  /></td>
          <td className="th--button"> 
            <button><img src={chart} alt="chart" /></button> 
            <button><img src={profile2} alt="profile" /></button> 
            <button><img src={more2} alt="more" /></button>
          </td>
        </tr>
        <tr height="96px" className="table--tr">
          <td width="195px"><h5 className="td--h5">Product Design GVI</h5><div className='td--p'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div></td>
          <td width="137px"><h5 className="td--h5-2">120 days</h5><h6 className="td--h6">(created on 10/12/2021)</h6></td>
          <td className='td--num'><div>20,000</div></td>
          <td className="th--img"><img src={row} alt="row"  /></td>
          <td className="th--button"> 
            <button><img src={chart} alt="chart" /></button> 
            <button><img src={profile2} alt="profile" /></button> 
            <button><img src={more2} alt="more" /></button>
          </td>
        </tr>
        <tr height="96px" className="table--tr">
          <td width="195px"><h5 className="td--h5">Product Design GVI</h5><div className='td--p'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div></td>
          <td width="137px"><h5 className="td--h5-2">120 days</h5><h6 className="td--h6">(created on 10/12/2021)</h6></td>
          <td className='td--num'><div>20,000</div></td>
          <td className="th--img"><img src={row} alt="row"  /></td>
          <td className="th--button"> 
            <button><img src={chart} alt="chart" /></button> 
            <button><img src={profile2} alt="profile" /></button> 
            <button><img src={more2} alt="more" /></button>
          </td>
        </tr>
        <tr height="96px" className="table--tr">
          <td width="195px"><h5 className="td--h5">Product Design GVI</h5><div className='td--p'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div></td>
          <td width="137px"><h5 className="td--h5-2">120 days</h5><h6 className="td--h6">(created on 10/12/2021)</h6></td>
          <td className='td--num'><div>20,000</div></td>
          <td className="th--img"><img src={row} alt="row"  /></td>
          <td className="th--button"> 
            <button><img src={chart} alt="chart" /></button> 
            <button><img src={profile2} alt="profile" /></button> 
            <button><img src={more2} alt="more" /></button>
          </td>
        </tr>
        
      </table>
      
    </div>
  )
}