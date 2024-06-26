// Formulario.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ onSubmit }) => {
  const [usuario, setUsuario] = useState('');
  const [accion, setAccion] = useState('');
  const [papel, setPapel] = useState('');
  const [jabon, setJabon] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      usuario,
      accion,
      papel,
      jabon,
      observaciones,
      hora: new Date().toLocaleTimeString()
    });
    // Limpiar campos después de enviar
    setUsuario('');
    setAccion('');
    setPapel('');
    setJabon('');
    setObservaciones('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsuario">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formAccion">
        <Form.Label>Acción</Form.Label>
        <Form.Control
          as="select"
          value={accion}
          onChange={(e) => setAccion(e.target.value)}
          required
        >
          <option value="">Seleccionar</option>
          <option value="limpieza">Limpieza</option>
          <option value="repaso">Repaso</option>
          <option value="chequeo">Chequeo</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formPapel">
        <Form.Label>Papel</Form.Label>
        <Form.Control
          as="select"
          value={papel}
          onChange={(e) => setPapel(e.target.value)}
          required
        >
          <option value="">Seleccionar</option>
          <option value="ok">OK</option>
          <option value="reposicion">Reposición</option>
          <option value="falta">Falta</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formJabon">
        <Form.Label>Jabón</Form.Label>
        <Form.Control
          as="select"
          value={jabon}
          onChange={(e) => setJabon(e.target.value)}
          required
        >
          <option value="">Seleccionar</option>
          <option value="ok">OK</option>
          <option value="reposicion">Reposición</option>
          <option value="falta">Falta</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formObservaciones">
        <Form.Label>Observaciones</Form.Label>
        <Form.Control
          as="textarea"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar Registro
      </Button>
    </Form>
  );
};

export default Formulario;
