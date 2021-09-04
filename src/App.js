import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './components/Recipe';

const App = () => {

  const APP_ID ="43c41042";
  const APP_KEY ="68622041ef594128e043f20e6e7c7c18";
  const API_URL =`https://api.edamam.com/search?q=cherry&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

    const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  return (
    <div className="App">
      <h1>Food Searching</h1>
    {
      
      recipes.map((r,id) => (
        <Recipe key={id} label={r.recipe.label} image={r.recipe.image} calories={r.recipe.calories} cuisineType={r.recipe.cuisineType}/>
      ))
    }      
    </div>
  )
};

export default App;
