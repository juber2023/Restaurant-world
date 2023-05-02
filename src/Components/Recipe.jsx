import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = () => {
    const [chef, SetChef]=useState([])
    const [recipe, SetRecipe]=useState([])
    const {id}=useParams()
    const AllChef=useLoaderData()
    useEffect(()=>{
        fetch(`http://localhost:3000/chef/${id}`)
        .then(res=>res.json())
        .then(data=>SetRecipe(data))
    },[])

        useEffect(()=>{
            SetChef(AllChef?.find(n=>n.id==id))
        },[id,AllChef])
        console.log(recipe);
    
    return (
        <div>
            {/* banner section */}
            <div className='h-[calc(100vh-70px)] bg-cover bg-no-repeat text-white' style={{backgroundImage:`url("https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food-top-view_2829-14380.jpg?w=1380&t=st=1683000549~exp=1683001149~hmac=8fa669bea388da9af741d7e365e4f07af3059ce8d7e659e3cc36c5a81a8a67a0")`}}>

                <div className='grid grid-cols-2 justify-center items-center w-3/4 mx-auto gap-10 h-full'>
                <div>
                    <p className='font-extrabold text-4xl text-yellow-300 mb-3'>{chef.name}</p>
                    <p > <span className='font-semibold text-xl text-yellow-300'>Bio:</span> {chef.bio}</p>
                    <p> <span className='font-semibold text-xl text-yellow-300'>Likes:</span> {chef.like}</p>
                    <p><span className='font-semibold text-xl text-yellow-300'>Number of recipes:</span> {chef.num_recipes}</p>
                    <p><span className='font-semibold text-xl text-yellow-300'>Experience:</span> {chef.experience} Years</p>
                </div>
                <div>
                    <img className=' h-[calc(100vh-70px)]' src={chef.photo} alt="" />
                </div>
                </div>
                
            </div>
            <h1 className='text-center text-4xl font-bold mt-10 mb-5 '>Recipes</h1>
            <div className='grid md:grid-cols-2 gap-5 md:w-3/4 mx-auto'>
                {recipe?.map((r,index)=>{
                    return <div key={index} className='border border-black shadow-lg rounded-lg p-5 relative'>
                        <img className='h-[320px] w-full rounded-lg mb-3' src={r.photo} alt="" />
                        <p > <span className='font-semibold text-xl'>Recipe name:</span> {r.recipe_name}</p>
                        <p><span className='font-semibold text-xl'>Ingredients:</span>  {r.ingredients}</p>
                        <p><span  className='font-semibold text-xl'> Cooking method:</span> {r.cooking_method}</p>
                        <div className='flex mb-10 space-x-2 mt-2'>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(r.rating?r.rating:0)}
                            readOnly
                        /> 
                        <p className=''>{r.rating}</p>
                        </div>
                        
                        <button className='bg-amber-300 p-2 font-bold text-lg hover:bg-sky-500 duration-150 rounded-lg absolute bottom-0 w-full -translate-x-5'>Add to favorite</button>
                    </div>
                })}
            </div>
            
        </div>
    );
};

export default Recipe;