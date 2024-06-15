import React from 'react'
import{Container , Logo ,  LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status) 
  const navigate = useNavigate()
  
    const navItems = [

      {
        name : 'Home',
        slug : '/',
        active : true
      },

      {
        name : 'Games',
        slug : '/game',
        active: authStatus
      },

      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Tournaments",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Tournaments",
        slug: "/add-post",
        active:authStatus,
    },


    ]

    return (
      <header className='py-3 shadow bg-black'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <Logo width='70px'   />
  
                </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className='text-white hover:bg-violet-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                  >{item.name}</button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
          </Container>
      </header>
    )
} 

export default Header