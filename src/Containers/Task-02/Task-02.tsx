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
      const jokesArray = [];

      for (let i = 0; i < 7; i++) {
        const response = await fetch(url);
        jokesArray.push(response);
      }

      const allJokes = Promise.all(jokesArray);
      const getAllJokes = await allJokes;

      getAllJokes.map(async (oneJokeResponse) => {
        if (oneJokeResponse.ok) {
          const dataJoke = await oneJokeResponse.json();
          setJokes((prevJokes) => [...prevJokes, dataJoke]);
        }
      });
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
