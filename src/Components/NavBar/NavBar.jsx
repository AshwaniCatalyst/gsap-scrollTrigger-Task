import React from 'react'
import './style.css'
const NavBar = () => {
    const navLinks = [
        {
            id:1,
            title:"Home",
            url:"#Home"
        }
        ,
        {
            id:2,
            title:"Docs",
            url:"#Docs"
        },
        {
            id:3,
            title:"Gallery",
            url:"#Gallery"
        },
        {
            id:4,
            title:"Contact Us",
            url:"#Contact"
        }
    ]
  return (
    <>
    <div className='Navbar'>
    <div className='container '>
        <div className="row">
            <div className="col-sm-2">
            <div className='navLogo'>
            <a href="/">Nav Logo</a>
            </div>
            </div>
            <div className="col-sm-10 ">
                <div className='navLinks'>
                <ul >
                {navLinks.map(link=>(
                    // eslint-disable-next-line react/jsx-key
                    <li>
                    <a key={link.id} href={link.url}>{link.title}</a>
                    </li>
                     ))}
                </ul>
                </div>
            </div>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default NavBar
