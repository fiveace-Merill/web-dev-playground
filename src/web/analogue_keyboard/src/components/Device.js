import React from 'react'
import Keypad from './Keypad'
import Display from './Display'
import '../style/device.css'
export default function Device(){
  return(
    <div className= "device">
      <Display />
      <Keypad />
    </div>
  )
}

