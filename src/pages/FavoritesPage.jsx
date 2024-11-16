import React from 'react'
import RecipeCard from '../components/RecipeCard';
import { getRandomColor } from '../lib/utils';
import errorImage from "../assests/404.svg";

const FavoritesPage = () => {

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className='bg-[#faf9fb] p-10 flex-1  min-h-screen'>
      <div className='max-w-screen-lg  mx-auto'>
        <h1 className="font-bold text-3xl md:text-4xl my-1">
          My Favorites
        </h1>


        {favorites.length === 0 && (
          <div className='h-[80vh] flex flex-col items-center gap-4'>
            <img src={errorImage} alt="404 svg"
              className='h-3/4'
            />
          </div>
        )}


        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default FavoritesPage