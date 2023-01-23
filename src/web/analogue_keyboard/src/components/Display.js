import React, { useContext } from 'react'
import KeyboardContext from '../context/KeyboardContext'
import '../style/display.css'
import numericBoard from '../assets/numericKeyboard'

export default function Display(){
  const keyboardCtx = useContext(KeyboardContext)
  const text = numericBoard(keyboardCtx.text)
  return(
    <div className = "display">
      { text }
    </div>
  )
}
