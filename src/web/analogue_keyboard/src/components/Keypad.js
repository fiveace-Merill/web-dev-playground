import React from 'react'
import Button from './Button'
import '../style/keypad.css'
export default function Keypad(){
  return(
    <div className = "keypad">
      <Button val = {1} digits = { " ,.?!" }/>
      <Button val = {2} digits = { "abc" }/>
      <Button val = {3} digits = { "def" }/>
      <Button val = {4} digits = { "ghi" }/>
      <Button val = {5} digits = { "jkl" }/>
      <Button val = {6} digits = { "mno" }/>
      <Button val = {7} digits = { "pqrs" }/>
      <Button val = {8} digits = { "tuv" }/>
      <Button val = {9} digits = { "wxyz" }/>
    </div>
  )
}


