import React from 'react';
import './Card.css';

interface Props {
  name: string,
  image?: string,
  type?: string
}

const Card = (props: Props) => {
  return (
    <div className='pokemon-card'>
      <img
        src={props.image}
        alt="logo"
      />
      <h1>{props.name}</h1 >
      <p>{props.type}</p>
    </div>
  );
}

export default Card;
