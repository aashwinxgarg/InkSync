import React from 'react'
import { ScrollBlack } from './ScrollBlack'
import { ScrollWhite } from './ScrollWhite'
const ScrollPage = () => {
  return (
    <div className='pt-12 bg-gray-100 pb-32'>
      <ScrollBlack text="Capture, Organize, Remember."/>
      <ScrollWhite text="Connect, Collaborate, Thrive."/>
    </div>
  )
}

export default ScrollPage
