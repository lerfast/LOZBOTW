import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList({ categories }) {
  // Verificar si las categorías están vacías (podría ser que los datos aún no se han cargado)
  if (!categories || Object.keys(categories).length === 0) {
    return <div>Cargando categorías...</div>;
  }

  return (
    <div>
      {Object.keys(categories).map(category => (
        <div key={category}>
          <Link to={`/category/${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}  {/* Esto es para capitalizar el primer carácter */}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
