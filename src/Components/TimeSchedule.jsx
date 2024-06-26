import React from 'react'
import RadioComponent from './RadioComponent'
import {slots} from '../../data'
import '../App.css'

const TimeSchedule = () => {
  return (
    <>
    <div>
      <div className="Slot_container">
        <h1 className='TS_heading'>Select a time slot :-</h1>
        <div className="TS_main_container">
           {slots.map((el,index)=>{
            return(
                <RadioComponent text={el} key={index}/>
            )
           })}
        </div>
      </div>
    </div>
    </>
  )
}

export default TimeSchedule
