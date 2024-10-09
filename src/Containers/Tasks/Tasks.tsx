import './Tasks.css';
import FormElement from '../../Components/FormElement/FormElement.tsx';
import Movies from '../../Components/Movies/Movies.tsx';
import { useState } from 'react';
import { IMovie } from '../../types';

const Tasks = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const removeMovie = (id: string) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const addNewMovie = (newMovie: IMovie) => {
    setMovies((prevState) => [...prevState, newMovie]);
  };

  const editMovieName = (id: string, name: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, name: name } : movie,
      ),
    );
  };

  if (movies.length > 0) {
    localStorage.setItem("Movies", JSON.stringify(movies));
  } else {
    const getMoviesFromLocalStorage = localStorage.getItem("Movies") as string;
    if (getMoviesFromLocalStorage !== null) {
      const moviesFromLS = JSON.parse(getMoviesFromLocalStorage);
      moviesFromLS.map((movie: IMovie) => {
        movies.push(movie);
      });
    }
  }

  return (
    <div className="container">
      <FormElement addNewMovie={addNewMovie} />
      <div className="movies-block">
        <Movies
          movies={movies}
          removeMovie={removeMovie}
          editMovieName={editMovieName}
        />
      </div>
    </div>
  );
};

export default Tasks;
