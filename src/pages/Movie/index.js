//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';
import { APIKey } from '../../Config/key';
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";


function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      const {title, poster_path, release_date, overview, vote_average} = data
      const movie = {
        id,
        title,
        rating: vote_average,
        image: `${imagePath}${poster_path}`,
        sinopse: overview,
        releaseDate: release_date
      }
      setMovie(movie)
    })
  }, [id])

  return (
    <Container>
      <div className="movie">
      <div className="details">
        <h1 style={{color: "white", fontSize: '60px'}}>{movie.title}</h1>
        <IconContext.Provider value={{ color: "yellow", className: "global-class-name" }}>
        <span style={{color: "white", fontSize: '20px'}}><b>Rating: </b>  <FaStar /> {movie.rating}</span>
        </IconContext.Provider>;
        <span style={{color: "white", fontSize: '20px'}}><b>Sinopse: </b>{movie.sinopse}</span>
        <span className='release-date' style={{color: "white", fontSize: '20px'}}>Release date: {movie.releaseDate}</span>
        <Link to="/Home"><button>Go Back</button></Link>
      </div>
      <img src={movie.image} alt={movie.sinopse}/>
    </div>
    </Container>
  );
}

export default Movie;