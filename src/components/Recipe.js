import {React} from 'react';


const Recipe = ({label, image, calories, cuisineType, ingredients}) => {
    return(
        <div>
            <h2>Recipe Name: {label}</h2>
            <p>Calories:{Math.floor(calories)}</p>
            <p>Cuisine Type: <b>{cuisineType}</b></p>
            <img src={image} alt={label} />
            <div>
           {       <pre>
            <ul>
                   {ingredients.map((ingredients) => (
                       <li>{ingredients.text}</li>
                   )
                   )}
            </ul>
                </pre>
                  
                    }
        </div>
        </div>
        
        
    )
}

export default Recipe;