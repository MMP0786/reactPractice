import React from 'react'
import { Link } from 'react-router-dom'

function NavLink() {

    const styled = {
        margin: "10px",
        textDecoration: "none"
    }
  return (
    <div style={{height:"50px", background:"#ffd", paddingTop:"20px"}}>
        <Link to="/" style={styled}>Home</Link>
        <Link to="/about" style={styled}>AboutInfo</Link>
        <Link to={"/use"} style={styled}>UseState</Link>
        <Link to={"/BootStrap"} style={styled}>BootStrap</Link>
        {/* <Link to={"/about"} style={styled}>About Info</Link> */}
    </div>
  )
}

export default NavLink