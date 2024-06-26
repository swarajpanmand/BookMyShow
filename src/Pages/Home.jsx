import React from 'react'
import '../App.css'
import SelectMovie from '../Components/SelectMovie'
import LastBookingDetails from '../Components/LastBookingDetails'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeats from '../Components/SelectSeats'
import BsContext from '../Context/BsContext'
import { useContext } from 'react'

const Home = () => {
  return (
    <>
    
    <div className='container'>
      <div className="wrapper">
        <div className="select_movie_component">
            <SelectMovie/>
      </div>
      <div className="last_booking_details_container">
        <LastBookingDetails/>
      </div>
    </div>
    <div className="time_seats_container">
      <TimeSchedule/>
      <SelectSeats/>
      <button className='BN-btn'>Book Now</button>
    </div>
    </div>
    </>
  )
}

export default Home;
