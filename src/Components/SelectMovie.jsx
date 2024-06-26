import React from 'react'
import '../App.css'
import { movieList } from '../../data'
import RadioComponent from './RadioComponent'
import { useContext } from 'react'
import BsContext from '../Context/BsContext'

const SelectMovie = () => {
  const context = useContext(BsContext);

  const {movie, changeMovie} = context;
  const handleChangeMovie = (val) =>{
    changeMovie(val)

    window.localStorage.setItem('movie', val)
  }


  return (
    <>
        <h1 className='SM_heading'>Select a movie :-</h1>
        <div className="SM_main_container">
        {movieList.map((el,index)=>{
        return(
            <RadioComponent text={el} key={index} data={movie} changeSelection={handleChangeMovie}/>
        )
      })}
      </div>
    </>
  )
}

export default SelectMovie
