import Movie from './Movie/Movie.tsx';
import './Movies.css';
import React, { useEffect } from 'react';
import { IMovie } from '../../types';


interface IProps {
  movies: IMovie[];
  removeMovie: (id: string) => void;
}

const Movies: React.FC<IProps> = ({movies, removeMovie}) => {

  console.log('[Movies] render');

  useEffect(() => {
    console.log('[Movies] mounted!');
  }, []);


  return (
    <>
      {movies.length > 0 ? (
        <>
          <div className="title">
            <h2>To watch list:</h2>
          </div>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} removeMovie={() => removeMovie(movie.id)} />
          ))}
        </>
      ) : (
        <div className="empty-block">Your movie block is empty. Please add some movies!</div>
      )}
    </>
  );
};

export default Movies;