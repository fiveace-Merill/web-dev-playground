import React, { useContext, useEffect } from 'react'
import '../style/button.css'
import KeyboardContext from '../context/KeyboardContext'
export default function Button({ val, digits }){
  const keyboardCtx = useContext(KeyboardContext)
  let text = keyboardCtx.text
  function toggleClick(){
    keyboardCtx.updateText(val.toString())
  }
  useEffect(() => console.log(text))
  return(
    <div className = "button" onClick = { toggleClick }>
      { val }
      <p>{ digits }</p>
    </div>
  )
}
