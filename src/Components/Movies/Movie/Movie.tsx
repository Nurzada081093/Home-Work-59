import './Movie.css';

const Movie = () => {
  return (
    <div className="movie-block">
      <div className="movie">
        <label htmlFor="name"></label>
        <input
          type="text"
          // value={name}
          id="name"
          name="name"
          // onChange={onChange}
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
};

export default Movie;