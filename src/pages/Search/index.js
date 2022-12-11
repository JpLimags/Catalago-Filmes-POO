import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import { APIKey } from '../../Config/key';
import { Container, Movie, MovieList } from './styles';

const searchUrl = 'https://api.themoviedb.org/3/search/movie/'
const imagePath = 'https://image.tmdb.org/t/p/w500/'

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
      };

      useEffect(() => {
        const searchWithQueryURL = `${searchUrl}?${APIKey}&query=${query}`;
        getSearchedMovies(searchWithQueryURL);
      }, [query]);

    return (
        <Container>
        <h1 style={{color: "white", fontSize: '50px'}}>Resultado da pesquisa</h1>
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
      )
}

export default Search