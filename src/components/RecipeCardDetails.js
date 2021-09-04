import React from 'react';

const RecipeIngredients = ({ingredients}) =>{
    return(
        <div>
           {
                   <ol>
                   {ingredients.map((ingredients) => (
                       <li>{ingredients.text}</li>
                   )
                   )}
               </ol>
                    }
        </div>
    )
}

export default RecipeIngredients;