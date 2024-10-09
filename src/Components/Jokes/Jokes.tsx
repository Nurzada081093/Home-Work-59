import { IJoke } from '../../types';
import React, { useEffect } from 'react';
import Joke from './Joke/Joke.tsx';

interface IProps {
  jokes: IJoke[];
}

const Jokes: React.FC<IProps> = ({jokes}) => {

  console.log('[Jokes] render');

  useEffect(() => {
    console.log('[Jokes] mounted!');
  }, []);

  return (
    <>
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke}/>
      ))}
    </>
  );
};

export default Jokes;