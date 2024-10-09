import './Movie.css';
import React, { MouseEventHandler, useEffect } from 'react';
import { IMovie } from '../../../types';

interface IProps {
  movie: IMovie;
  removeMovie: MouseEventHandler;
  editMovieName: (id: string, name: string) => void;
}

const Movie: React.FC<IProps> = React.memo(
  ({ movie, removeMovie, editMovieName }) => {
    console.log("[Movie] render");

    useEffect(() => {
      console.log("[Movie] mounted!");
    }, []);

    const changeMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
      editMovieName(movie.id, e.target.value);
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
            required
          />
        </div>
        <div className="movie-button">
          <button type="button" onClick={removeMovie}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency/48/delete-sign.png"
              alt="delete-sign"
            />
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      nextProps.movie.id === prevProps.movie.id &&
      nextProps.movie.name === prevProps.movie.name
    );
  },
);

export default Movie;
