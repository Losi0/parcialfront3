import { useState } from "react";
import Card from "./Card";

const Form = () => {
    const [titulo, setTitle] = useState('');
    const [descripcion, setDescription] = useState('');
   
    const [showError, setShowError] = useState(false);
    const [showCard, setShowCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (
      titulo.trim().length >= 3 &&
      titulo.trim() === titulo && descripcion.length >= 6)
     {
        setShowCard(true);
    } else {
      setShowError(true);
      setShowCard(false);
    }
  };
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
          Título del libro:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
       <br />
        <label>
          Descripción:
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {showError && <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta</p>}

      {showCard && <Card titulo={titulo} descripcion={descripcion} />}

   </div>
  );
};

export default Form;