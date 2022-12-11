import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { APIKey } from "../../Config/key"
import { Container, Movie, MovieList } from './styles';


const Home = () => {

  const [movies, setmovies] = useState([])
  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setmovies(data.results)
    })
  }, [])


  return (
    <Container>
      <h1 style={{color: "white", fontSize: '50px'}}>Filmes Populares no Momento</h1>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/Movie/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
  
}

export default Home;