import React, {useEffect, useState} from 'react';
import "./Nav.css"
import {useNavigate} from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false)
  const [searchValue, setSearchValue] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {

      })
    }
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />

      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        placeholder="영화를 검색해주세요."
      />

      <img
        src="https://netflix-bootcamp-db.netlify.app/static/media/profileIcon1.b36331ae.jpg"
        alt="User logged"
        className="nav_avatar"
      />
    </nav>
  );
};

export default Nav;