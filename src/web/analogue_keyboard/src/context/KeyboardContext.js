import { createContext, useState } from 'react';

const KeyboardContext = createContext({
  text: "",
  updateText: (f) => f
})

export function KeyboardContextProvider({ children}){
  const [text, setText] = useState("")
  function updateTextHandler(text){
    setText((initialText) => initialText + text)
  }

  const context = {
    text: text,
    updateText: updateTextHandler
  }
  return(
    <KeyboardContext.Provider value = {context}>
      { children }
    </KeyboardContext.Provider>
  )
}

export default KeyboardContext
