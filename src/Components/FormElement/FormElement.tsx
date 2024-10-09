import './FormElement.css';
import React, { useState } from 'react';
import { IMovie, IMovieProps } from '../../types';

interface IProps {
  addNewMovie: (newMovie: IMovie) => void;
}

const FormElement: React.FC<IProps> = ({ addNewMovie }) => {
  const [newMovie, setNewMovie] = useState<IMovieProps>({
    name: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitNewMovie = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newMovie.name.trim().length === 0) {
      alert("Please enter the name of the movie!");
    } else {
      addNewMovie({
        id: String(new Date()),
        ...newMovie,
      });

      setNewMovie({
        name: "",
      });
    }
  };

  return (
    <form className="form" onSubmit={submitNewMovie}>
      <div className="input-element">
        <label htmlFor="name"></label>
        <input
          type="text"
          value={newMovie.name}
          id="name"
          name="name"
          onChange={onChange}
          placeholder="Enter the name of the movie..."
          required
        />
      </div>
      <div className="button-element">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default FormElement;
