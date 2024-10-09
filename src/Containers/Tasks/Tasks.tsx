import './Tasks.css';
import FormElement from '../../Components/FormElement/FormElement.tsx';
import Movies from '../../Components/Movies/Movies.tsx';
import { useState } from 'react';
import { IMovie } from '../../types';

const Tasks = () => {
  const [movies, setMovies] = useState<IMovie[]>([
    {id: '1', name: 'Интерстеллар (2014)'},
    {id: '2', name: 'Зелёная миля (1999)'},
    {id: '3', name: 'Дело храбрых (2017)'},
  ]);


  const removeMovie = (id: string) => {
    setMovies((prevMovies) => prevMovies.filter((movie => movie.id !== id)));
  };


  const addNewMovie = (newMovie: IMovie) => {
    setMovies((prevState) => [...prevState, newMovie]);
  };

  return (
    <div className="container">
      <FormElement addNewMovie={addNewMovie}/>
      <div className="movies-block">
        <Movies movies={movies} removeMovie={removeMovie}/>
      </div>
    </div>
  );
};

export default Tasks;