import React from 'react'
import { seats } from '../../data'
import '../App.css'

const LastBookingDetails = () => {
  return (
    <div>
      <div className="last_booking_details_container_main">
        <h2 className='last_booking_details_heading'>Last Booking Details :-</h2>
        <div className="seats_container">
            <p className='seats_header'>Seats:</p>
            <ul className='seats'>
                {seats.map((el,index)=>{
                    return(
                        <li className="seat_value" key={index}>
                            (seat ) : 0
                        </li>
                    )
                })}
            </ul>
        </div>
      </div>
      <p className='slot' style={{textAlign:"left"}}>
        Slot: 00:00 AM<span></span>
      </p>
        <p className='movie' style={{textAlign:"left"}}>
            Movie: Movie Name<span></span></p>
    </div>
  )
}

export default LastBookingDetails
