import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from './Card';

function CategoryView() {
  const { category } = useParams();
  const categoryItems = useSelector(state => state.data.categories[category]);

  if (!categoryItems) return <div>Cargando...</div>;

  return (
    <div>
      {categoryItems.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CategoryView;
