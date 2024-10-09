import './Movie.css';
import React, { useEffect } from 'react';
import { IMovie } from '../../../types';

interface IProps {
  movie: IMovie;
}

const Movie: React.FC<IProps> = React.memo(({movie}) => {

  console.log('[Movie] render');

  useEffect(() => {
    console.log('[PostCard] mounted!');
  }, []);

  const changeMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Изменено:', e.target.value);
  };

  return (
    <div className="movie-block">
      <div className="movie">
        <label htmlFor="name"></label>
        <input
          type="text"
          value={movie.name}
          id="name"
          name="name"
          onChange={changeMovieName}
          required/>
      </div>
      <div className="movie-button">
        <button
          type="submit"
        >
          <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/delete-sign.png"
               alt="delete-sign"/>
        </button>
      </div>
    </div>
  );
});

export default Movie;