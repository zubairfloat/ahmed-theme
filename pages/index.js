import React from 'react'
import Navbar from '../components/Navbar-component'

const INDEX_PAGE = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
    </div>
  )
}

export default INDEX_PAGE

// {loggedIn && (
//   <div>
//     <Navbar />
//   </div>
// )}
// {!loggedIn && (
//   <div>
//     <Link href="/login">Login</Link>
//     <p>or</p>
//     <Link href="/signup">Sign Up</Link>
//   </div>
// )}
