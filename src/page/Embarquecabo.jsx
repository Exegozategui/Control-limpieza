import React, { useState, useEffect } from 'react';
import Tabla from '../componentes/tabla/index'; 
import Pagination from '../componentes/paginacion/index';
import banosData from '../data.json'; 
import { Row, Col } from "react-bootstrap";
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
    <div className="mt-4">
    {banosActuales.map((bano) => (
      <Row key={bano.id} className="justify-content-center mb-4">
        <Col md={8}>
          <h2 className="text-center text-light my-4 border-bottom pb-2">Baño Número: {bano.number}</h2>
          <Tabla />
        </Col>
      </Row>
    ))}
    <Row className="justify-content-center">
      <Col md={8} className="d-flex justify-content-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Col>
    </Row>
  </div>
  );
};

export default Embarquecabo;