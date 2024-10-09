import Movie from './Movie/Movie.tsx';
import './Movies.css';
import { useEffect, useState } from 'react';
import { IMovie } from '../../types';

const Movies = () => {

  const [movies, setMovies] = useState<IMovie[]>([
    {id: '1', name: 'Интерстеллар (2014)'},
    {id: '2', name: 'Зелёная миля (1999)'},
    {id: '3', name: 'Дело храбрых (2017)'},
  ]);

  console.log('[Movies] render');

  useEffect(() => {
    console.log('[Movies] mounted!');
  }, []);

  return (
    <>
      <div className="title">
        <h2>To watch list:</h2>
      </div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie}/>
      ))
      }
    </>
  );
};

export default Movies;