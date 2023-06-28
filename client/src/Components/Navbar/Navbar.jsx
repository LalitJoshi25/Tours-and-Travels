import React, {useState} from 'react'

//Imported Icons ===========>
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

// Importing Images ========>
import logo from '../../assets/logo.avif';

const Navbar = () => {

  // let us remove the NavBar in the small width screens===>
  const [active, setActive] = useState('navBarMenu')
  const showNavBar = () => {
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar = () => {
    setActive('navBarMenu')
  }

   // let us add a background color to the secondary navbar===>
   const [noBg, addBg] = useState('navBarTwo') 

    const addBgColor = () =>{ 
      if(window.scrollY >= 10){
        addBg('navBarTwo navbar_Width_Bg')
      }else{
        addBg('navBarTwo')
      }
   }
   window.addEventListener('scroll', addBgColor)


  return (
    <div className='navBar flex'>

      {/* First navBar */}
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>

        <div className='none flex'>
          <li className='flex'><BsPhoneVibrate className='icon' /> Support</li>
          <li className='flex'><AiOutlineGlobal className='icon' /> Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>

      </div>

      {/* Secondary navBar */}
      <div className={noBg}>

        <div className="logoDiv">
          <img src={logo} className='Logo' alt="logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Offers</li>
            <li onClick={removeNavBar} className="listItem">Seats</li>
            <li onClick={removeNavBar} className="listItem">Destinations</li>
          </ul>

          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact
          </button>

        </div>

        <button className="btn flex btnTwo">
          Contact
        </button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className='icon'/>
        </div>

      </div>

    </div>
  )
}

export default Navbar
