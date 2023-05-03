import React from 'react';
import Marquee from 'react-fast-marquee';
import { useLoaderData ,Link } from 'react-router-dom';

const Home = () => {
    const chef=useLoaderData()
    // console.log(chef);
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
            {/* marquee  */}
            <div className='text-2xl bg-red-100 rounded-lg p-5'>
            <Marquee>
            Bangladesh is home to many talented chefs who are known for their unique cooking styles and innovative use of spices and ingredients. One such chef is Juber Alam, a Bangladeshi-born chef who has gained international recognition for his exceptional culinary skills. Juber has worked in some of the world's most prestigious restaurants and has won numerous awards for his cooking, including two Michelin stars. He is known for his ability to combine traditional Bangladeshi flavors with modern cooking techniques, creating dishes that are both innovative and delicious. His passion for cooking and dedication to quality have earned him a reputation as one of the best chefs in the world.
            </Marquee>
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
                            <Link to={`/chef/${profile.id}`}><button className='bg-amber-300 py-2 font-bold text-lg w-full hover:bg-sky-500 duration-150 rounded-b-lg'>View Recipes</button></Link>
                            

                        </div>
                        
                    </div>
                })
            }
            </div>
            

            
        </div>
    );
};

export default Home;