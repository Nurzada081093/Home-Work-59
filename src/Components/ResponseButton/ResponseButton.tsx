import './ResponseButton.css';
import React, { MouseEventHandler } from 'react';

interface IProps {
  getNewJoke: MouseEventHandler;
}

const ResponseButton: React.FC<IProps> = ({getNewJoke}) => {
  return (
    <>
      <button className="custom-btn btn-9" type="button" onClick={getNewJoke}>Get new joke</button>
    </>
  );
};

export default ResponseButton;