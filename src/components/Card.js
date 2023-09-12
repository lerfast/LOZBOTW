import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div>
      <Link to={`/detail/${item.id}`}>
      <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} />
      </Link>
    </div>
  );
}

export default Card;
