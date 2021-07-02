import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [recipeFound, setRecipeFound] = useState([]);
const [recipeSearch, setRecipeSearch] = useState('');

const searchForRecipes = async (query: string): Promise<any> => {
  const result = await fetch(`http://www.recipepuppy.com/api/?search=${query}`);
  return(await result.json()).result;
};


  return (
    <div className="App">
  
    </div>
  );
}

export default App;
