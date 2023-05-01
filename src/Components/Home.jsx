import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chef=useLoaderData()
    console.log(chef);
    return (
        <div className='mb-5'>
            {/* banner section */}
            <div className='relative'>
            <img className='w-full h-[calc(100vh-70px)]' src='https://img.freepik.com/free-photo/front-view-burger-with-french-fries_23-2148234992.jpg?w=1380&t=st=1682967274~exp=1682967874~hmac=106ee3fddfcde329e78bd64c9bb53d255b12a2c31957bcc4dd9e60915307e6f5' alt="" />
            <div className='absolute right-1/4 top-1/4 text-white'>
            <p className='font-extrabold text-5xl'><span className='text-yellow-400 text-5xl'>S</span>urprise <span className='text-yellow-400 text-5xl'>Y</span>our <span className='text-yellow-400 text-5xl'>P</span >alate</p>
            <p className='font-bold text-2xl mt-2'>Fine foods & drinks</p>
            </div>
            </div>

            {/* chef section */}
            <h1 className='text-center text-4xl font-bold mt-10 mb-5'><span className='text-yellow-400 text-5xl'>O</span>ur <span className='text-yellow-400 text-5xl'>C</span>hefs</h1>

            <div className='grid md:grid-cols-3 md:w-3/4 mx-auto gap-4 '>
            {
                chef.map(profile=>{
                    return <div key={profile.id} className='rounded-lg border shadow-lg hover:scale-110 duration-150'>
                        <div className=''>
                            <img className='rounded-t-lg w-full h-[306px]' src={profile.photo} alt="" />
                            <div className='p-5'>
                            <h3 className='font-semibold text-xl'>{profile.name}</h3>
                            <hr />
                            <hr className='mb-3'/>
                            <p>Experience: {profile.experience} years</p>
                            <p>Numbers of recipes: {profile.num_recipes}</p>
                            <p>Likes: {profile.like}</p>
                            </div>
                            
                            <button className='bg-amber-300 py-2 font-bold text-lg w-full hover:bg-sky-500 duration-150 rounded-b-lg'>View Recipes</button>

                        </div>
                        
                    </div>
                })
            }
            </div>
            

            
        </div>
    );
};

export default Home;