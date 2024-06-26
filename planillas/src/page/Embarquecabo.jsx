import React, { useState, useEffect } from 'react';
import Tabla from '../componentes/tabla/index'; // Asegúrate de que la ruta sea correcta
import Pagination from '../componentes/paginacion/index';
import banosData from '../data.json'; // Asegúrate de que la ruta sea correcta

const Embarquecabo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [banosPorPagina] = useState(1);

  
   
    const banosEmbarqueC = banosData.baños.filter(bano => bano.sector.toLowerCase().includes('embarque')&& bano.location.toLowerCase().includes('cabotaje') );
  

  const indexOfLastBano = currentPage * banosPorPagina;
  const indexOfFirstBano = indexOfLastBano - banosPorPagina;
  const banosActuales = banosEmbarqueC.slice(indexOfFirstBano, indexOfLastBano);

  const totalPages = Math.ceil(banosEmbarqueC.length / banosPorPagina);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {banosActuales.map(bano => (
        <div key={bano.id}>
          <h2>Baño Número: {bano.number}</h2>
          <Tabla />
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Embarquecabo;