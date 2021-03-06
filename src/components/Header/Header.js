import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaBars , FaTimes } from 'react-icons/fa';
import Logo from "../Img/corona-virus.png";
import "./style.css"

const Header = () => {
  const [click , setClick ] =  useState(false);
  const [button, setButton] = useState(true);
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960 ){
          setButton(false)
      }else{
          setButton(true)
      }
  }
  useEffect(() =>{
      showButton();
  }, []);

  const changeBackground = () => {
      if(window.scrollY >= 50){
          setNav(true)
      }else{
          setNav(false)
      }
  }
window.addEventListener("scroll" , changeBackground);
  return (
    <div>
      <div className={nav ? 'navbar active' : 'navbar'}>
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} alt='pic' />
            Covid 19
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes className="icons-nav" /> : <FaBars className="icons-nav" />}
          </div>
          <div className={click ? 'menu active' : 'menu'}>
            <ul className='nav-menu' >
              <li className="nav-item ">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  الرائيسية
                </Link>
              </li> 
              <li className="nav-item">
                <a href="#about" className="nav-links" onClick={closeMobileMenu}>
                حول
                </a>
              </li>
              <li className="nav-item">
                <a href='#worldState' className="nav-links" onClick={closeMobileMenu}>
                  الاحصائيات
                </a>
              </li> 
              <li className="nav-item">
                <a href="#Symptoms" className="nav-links" onClick={closeMobileMenu}>
                الاعراض
                </a>
              </li>
              <li className="nav-item">
                <a href='#Instructions' className="nav-links" onClick={closeMobileMenu}>
                  الوقاية
                </a>
              </li>
              <li className="nav-item">
              <a href='#contact' className="nav-links" onClick={closeMobileMenu}>
                التواصل
              </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header