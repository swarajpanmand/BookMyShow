import React from 'react'
import { seats } from '../../data'
import SeatInputs from './SeatInputs'
import '../App.css'

const SelectSeats = () => {
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats :-</h1>
      <div className="SS_main_container">
        {seats.map((el,index)=>{
            return(
                <SeatInputs text={el} key={index}/>
            )
        })}
      </div>
    </div>
  )
}

export default SelectSeats
