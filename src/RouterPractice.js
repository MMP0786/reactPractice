import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function RouterPractice() {
  return (
    <div>
        <div> This is Home page for home information</div>
        <nav>
            <Link to={"signUp"}>Sign Up</Link>
            <Link to={"login"}>Login</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default RouterPractice