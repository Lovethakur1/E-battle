import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Games() {
  const navigate = useNavigate();

  const gameItems = [
    {
      name: 'BGMI',
      image: "pic/bgmi.webp",
      company: 'Krafton',
      active: true,
    },
    {
      name: 'PUBG',
      image: 'pic/pubg.webp',
      company: 'Krafton',
      active: true,
    },
    {
      name: 'Free-Fire',
      image: 'pic/free fire max.webp',
      company: 'Garena',
      active: true,
    },
    {
      name: 'Call-of-Duty',
      image: 'pic/call of duty.webp',
      company: 'Activision',
      active: true,
    },
    {
      name: 'Pokemon-Go',
      image: 'pic/pokemon.webp',
      company: 'Niantic',
      active: true,
    },
    {
      name: 'Clash-of-Clans',
      image: 'pic/clash of clans.webp',
      company: 'Supercell',
      active: true,
    },
    {
      name: 'Valorant',
      image: 'pic/valorant.webp',
      company: 'Riot Games',
      active: true,
    },
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
      {gameItems
        .filter((item) => item.active)
        .map((item) => (
          <li key={item.name}>
            <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md" style={{ minHeight: '160px' }}>
                
              <div>
                <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                    
                  <div className="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                    {/* <img src={item.image} alt={item.name} className="rounded-xl p-1" /> */}
                  </div>
                </div>

                <div className="relative block h-full">
                  <div className="h-34 bg-black rounded-lg">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>

              <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">{item.name}</h2>

              <p className="mt-2 text-gray-800 text-sm">Company: {item.company}</p>

              <button
                className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full"
                onClick={() => navigate(`/game/${item.name}`)}
              >
                Join Now
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Games;





const Game = [

        {
          name : 'BGMI',
          img : "pic/bgmi.webp",
          company : "KRAFTON, Inc.",
        },
  
        {
          name : 'PUBG',
          img : 'pic/pubg.webp',
          company: "KRAFTON, Inc.",
        },
  
        {
          name: "CODM",
          img: "pic/call of duty.webp",
          company: "Activision Publishing, Inc.",
      },
      {
          name: "Free Fire",
          img: "pic/free fire max.webp",
          company: "Garena",
      },
      {
          name: "POKEMON GO",
          img: "pic/pokemon.webp",
          company: "Niantic, Inc.",
      },
      {
          name: "CLASH OF CLANS",
          img: "pic/clash of clans.webp",
          company:"Supercell",
      },
      {
        name: "VALORANT",
        img: "pic/valorant.webp",
        company:"Riot Games",
    },
  
  
      ]