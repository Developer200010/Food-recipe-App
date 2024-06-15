import React from 'react'
import {Cards} from "../cards/Cards.js"
export const Card = ({details}) => {
  return (
    <>
    <div className='cardContainer'>
    <Cards detail={details}/>
    </div>
    </>
  )
}
