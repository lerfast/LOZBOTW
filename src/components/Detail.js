import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  const item = useSelector(state => {
    for (let category in state.data.categories) {
        const foundItem = state.data.categories[category].find(i => i.id === parseInt(id));
        if (foundItem) return foundItem;
    }
    return null;
  });

  if (!item) return <div>Ítem no encontrado</div>;

  return (
    <div>
           <h2>{item.name}</h2>
           <img src={item.image} alt={item.name} />
           <p>{item.description}</p>
      
    </div>
  );
}

export default Detail;
