import {React} from 'react';
import App from '../App.css';


const Recipe = ({label, image, calories, cuisineType, ingredients}) => {
    return(
        
        <div className="recipecard">
            <h2>Recipe Name: {label}</h2>
            <p>Calories:{Math.floor(calories)}</p>
            <p>Cuisine Type: <b>{cuisineType}</b></p>
            <img src={image} alt={label} />
            <div>
           {      
            <ul>
                   {ingredients.map((ingredients) => (
                    <p>{ingredients.text}</p>
                   )
                   )}
            </ul>
                  
                    }
        </div>
        </div>
        
        
    )
}

export default Recipe;