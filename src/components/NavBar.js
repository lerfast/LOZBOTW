import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link className="text-3xl font-bold underline" to="/">Inicio</Link>
    </div>
  );
}

export default Navbar;
