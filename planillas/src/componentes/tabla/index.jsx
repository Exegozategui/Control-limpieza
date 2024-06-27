import React, { useState } from 'react';
import Modal from '../modal/index';
import Formulario from '../formulario/index';
import Paginacion from '../paginacion/index';
import { Button, Table, Container } from 'react-bootstrap';

import { FaUser, FaBroom, FaToiletPaper, FaSoap, FaRegComment, FaClock } from 'react-icons/fa'; // Import icons

const Tabla = ({ registrosProp = [] }) => {
  const [registros, setRegistros] = useState(registrosProp);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [registrosPerPage] = useState(5);

  const indexOfLastRegistro = currentPage * registrosPerPage;
  const indexOfFirstRegistro = indexOfLastRegistro - registrosPerPage;
  const registrosActuales = registros.slice(indexOfFirstRegistro, indexOfLastRegistro);
  const totalPages = Math.ceil(registros.length / registrosPerPage);

  const agregarRegistro = (registro) => {
    setRegistros([...registros, registro]);
    setModalAbierto(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      
      <Button variant="primary" onClick={() => setModalAbierto(true)} className="mb-3">
        Agregar Registro
      </Button>

      <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)}>
        <Formulario onSubmit={agregarRegistro} />
      </Modal>

      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th><FaUser /> Usuario</th>
            <th><FaBroom /> Acción</th>
            <th><FaToiletPaper /> Papel</th>
            <th><FaSoap /> Jabón</th>
            <th><FaRegComment /> Observaciones</th>
            <th><FaClock /> Hora</th>
          </tr>
        </thead>
        <tbody>
          {registrosActuales.map((registro, index) => (
            <tr key={index}>
              <td>{registro.usuario}</td>
              <td>{registro.accion}</td>
              <td>{registro.papel}</td>
              <td>{registro.jabon}</td>
              <td>{registro.observaciones}</td>
              <td>{registro.hora}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default Tabla;
