import { Heart, HeartPulse, Soup } from 'lucide-react'
import React, { useState } from 'react'

const RecipeCard = ({ recipe, bg, badge }) => {

    const getTwoValuesFromArray = (array) => {
        return [array[0], array[1]];
    }

    const healthLabels = getTwoValuesFromArray(recipe.healthLabels);



    const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favorites')?.includes(recipe.label));

    const addRecipeToFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.label === recipe.label);

        if (isRecipeAlreadyInFavorites) {
            favorites = favorites.filter((fav) => fav.label !== recipe.label)
            setIsFavorite(false);
        } else {
            favorites.push(recipe);
            setIsFavorite(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    };


    return (
        <div className={`flex flex-col rounded-lg ${bg} overflow-hidden p-3 relative`}>

            {/* Image & on upper of it settings */}
            <a
                href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
                target='_blank'
                className='relative h-36'>

                <div className='skeleton absolute inset-0' />
                <img src={recipe.image} alt="recipe img"
                    className='h-full w-full rounded-md object-cover cursor-pointer opacity-0'
                    onLoad={(e) => {
                        e.currentTarget.style.opacity = 1;
                        e.currentTarget.previousElementSibling.style.display = "none";
                    }}
                />

                <div className='absolute bottom-2 left-2 bg-white rounded-full px-2 py-1 cursor-pointer flex items-center gap-1 text-sm'>
                    <Soup size={"18"} /> {recipe.yield} Serving
                </div>
                <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'
                    onClick={(e) => {
                        e.preventDefault();
                        addRecipeToFavorite();
                    }}
                >
                    {!isFavorite && <Heart size={"24"} className='hover:fill-red-500 hover:text-red-500' />}
                    {isFavorite && <Heart size={"24"} className='fill-red-500 text-red-500' />}
                </div>
            </a>


            {/* Below the Image text setting */}
            <div className='flex mt-2'>
                <p className='font-bold tracking-wide'>{recipe.label}</p>
            </div>
            <p className='my-2'>
                {
                    recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)
                } Kitchen</p>


            <div className='flex gap-2 mt-auto'>
                {healthLabels.map((label, idx) => (
                    <div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
                        <HeartPulse size={16} />
                        <span className='text-sm tracking-tighter font-semibold'>{label}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RecipeCard