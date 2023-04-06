import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div  >
        <ul className='flex justify-around bg-orange-200'>
          <li>
              Logo
          </li>
          <li>
              <Link to='/'  >Home </Link>

          </li>
          <li>
              <Link to='/create' > Create Post </Link>
          </li>
        </ul>

    </div>
  )
}
