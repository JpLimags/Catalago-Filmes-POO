
import { Link, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import "./style.css"

export default function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(search)
      if (!search) return;
  
      navigate(`/Search?q=${search}`, { replace: true });
      setSearch("");
    };
  
  return (
    <nav className="nav">
      <Link to="/Home" className="site-title">
        MovieDB
      </Link>
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
