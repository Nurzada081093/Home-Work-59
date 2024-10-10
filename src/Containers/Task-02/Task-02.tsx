import { useState } from 'react';
import { IJoke } from '../../types';
import Jokes from '../../Components/Jokes/Jokes.tsx';
import './Task-02.css';
import ResponseButton from '../../Components/ResponseButton/ResponseButton.tsx';

const Task02 = () => {
  const [jokes, setJokes] = useState<IJoke[]>([]);

  const url = 'https://api.chucknorris.io/jokes/random';

  const getNewJoke = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const joke = await response.json();
        setJokes((prevJokes) => [...prevJokes, joke]);
      }
    } catch (e) {
      alert('Error ' + e);
    }
  };

  return (
    <div className="container">
      <ResponseButton getNewJoke={getNewJoke}/>
      <Jokes jokes={jokes}/>
    </div>
  );
};

export default Task02;
