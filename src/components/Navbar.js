import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
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
