import Movie from './Movie/Movie.tsx';
import './Movies.css';

const Movies = () => {

  return (
    <>
      <div className="title">
        <h2>To watch list:</h2>
      </div>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
    </>
  );
};

export default Movies;