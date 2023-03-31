import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './NavBar.css';


const NavBar = () => {
  const [search, setSearch] = useState("")
  const navgate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(search);

      if(!search) return

    navgate(`/search?q=${search}`)
    setSearch("");
  }
  return (
    <nav id='navbar'>
    <h2>
      <Link to="/"> <BiCameraMovie /> Library Movies</Link>
    </h2>
    <form onSubmit={handleSubmit}> 
      <input 
        type="text" 
        placeholder="Busque um filme" 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </form>
  </nav>
  )
}

export default NavBar