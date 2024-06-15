import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage,status,gameName,entryPrice,date,slot,price }) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  
    
  return (
    <div className='p-2'>
    <Link to={`/post/${$id}`}>

        

       
    
      <div className="max-w-sm bg-white px-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 className="mb-3 text-xl font-bold text-indigo-600"> {gameName} </h3>
        <div className="relative">
          <img className="w-full rounded-xl" src={appwriteService.getFilePreview(featuredImage)} alt={title} />
          <p className="absolute top-0 bg-green-400 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{status} </p>
        </div>
        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{title} </h1>
        <div className="my-4">
          <div className="flex space-x-1pt-1 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p> {`Date:- ${formattedDate}`} </p>
          </div>
          <div className="flex space-x-1 pt-1 items-center">
            <span>
            <img src="pic/profile/teamwork.png" alt="slot" height="25px" width="25px"  />
              
            </span>
            <h3 className='text-black' >{`Slot :- ${slot}`}  </h3>
          </div>
          <div className="flex space-x-1 pt-1 items-center">
            <span>
              <img src="pic/profile/label.png" alt="entry price" height="25px" width="25px"  />
            </span>
            <p> {`EntryPrice :-  ${entryPrice} `} </p>
          </div>
          <div className="flex space-x-1 pt-1 items-center">
            <span>
            <img src="pic/profile/trophy.png" alt="" height="25px" width="25px"  />

            </span>
            <p> {`pricePool :-${price}`} </p>
          </div>
          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Register Now</button>
        </div>
      </div>

      
 
    
  
    </Link>
    </div>
  )
}


export default PostCard