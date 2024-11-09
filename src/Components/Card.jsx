import React, { useState } from 'react';


function Card({ titulo, descripcion }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Card;