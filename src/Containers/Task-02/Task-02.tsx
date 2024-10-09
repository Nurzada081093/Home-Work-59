import { useState } from 'react';
import { IJoke } from '../../types';
import Jokes from '../../Components/Jokes/Jokes.tsx';
import './Task-02.css';

const Task02 = () => {
  const [jokes, setJokes] = useState<IJoke[]>([]);

  const url = 'https://api.chucknorris.io/jokes/random';

  const getNewJoke = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const joke = await response.json();

      setJokes((prevJokes) => [...prevJokes, joke]);
    }
  };

  return (
    <div className="container">
      <button className="custom-btn btn-9" type="button" onClick={getNewJoke}>Get new joke</button>
      <Jokes jokes={jokes}/>
    </div>
  );
};

export default Task02;
