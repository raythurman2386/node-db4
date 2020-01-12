import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/recipes/')
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <ul>
        {recipes &&
          recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
      </ul>
    </div>
  )
}

export default Recipes
