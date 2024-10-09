import { IJoke } from '../../../types';
import React, { useEffect } from 'react';
import './Joke.css';

interface IProps {
  joke: IJoke;
}

const Joke: React.FC<IProps> = React.memo(({joke}) => {
  console.log('[Joke] render');

  useEffect(() => {
    console.log('[Joke] mounted!');
  }, []);

  return (
    <div className="joke-block">
      <p>{joke.value}</p>
      <img src={joke.icon_url} alt="joke"/>
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps.joke.value === prevProps.joke.value && nextProps.joke.icon_url === prevProps.joke.icon_url;
});

export default Joke;