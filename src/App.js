import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './components/Recipe';
import Header from './components/Header';


const App = () => {

  const APP_ID ="43c41042";
  const APP_KEY ="68622041ef594128e043f20e6e7c7c18";

  const [recipes, setRecipes] = useState([]);
  // For Searching
  const [search, setSearch] = useState('');
  // For SetQuery
  const [query, SetQuery] = useState('sushi');

  const API_URL =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    loadData();
  }, [query]);

  // For getting data by Search 
    const loadData = async () => {
    const response = await axios.get(API_URL);
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

// //For fetching data from API without Search
  //   const loadData = async () => {  
  //   const response = await fetch(API_URL);
  //   const data = await response.json();
  //   setRecipes(data.hits);
  //   console.log(data.hits);
  // }


  // Get change Recipe on Search
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // Update Recipe on Search
  const updateQuery = (e) => {
    e.preventDefault();
    SetQuery(search);
  };

  return (
    <div className="App">
      <Header/>
      {/* Search Bar */}
      <div className="search-bar">
        <form onSubmit={updateQuery}>
          <input type="text" aria-pressed="true" value={search} onChange= {updateSearch} placeholder="Search Your Food..." />
          <button type="submit"> Submit</button>
        </form>
      </div>
    {
      
      recipes.map((r,id) => (
        <Recipe key={id} label={r.recipe.label} image={r.recipe.image} calories={r.recipe.calories} cuisineType={r.recipe.cuisineType} ingredients={r.recipe.ingredients}/>
        ))
    }

    </div>
  )
};

export default App;
