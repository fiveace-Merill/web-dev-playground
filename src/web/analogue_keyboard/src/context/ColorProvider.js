import React, { useState } from 'react';
import { ColorContext } from './ColorContext';
import data from '../data/data';

//const data  = require('../data/data')

const ColorProvider = ({ children })=> {
	const [colors, setColors]= useState(data)
	
	const addColor = (title, hexcode)=>{
		let newColor = { id: Math.floor(Math.random * colors[0].length), name: title, hexcode: `"${hexcode}"`, rating: 6}
		const updateColors = [ newColor, ...colors ]
		setColors(updateColors)
	}
	const removeColor = (id)=>{
		const newColors = colors.filter(color => color.id !== id);
		setColors(newColors)
	}
  return(
    <ColorContext.Provider value={{ colors, removeColor, addColor }}>
      { children }
    </ColorContext.Provider>
  );
};
export default ColorProvider;   
