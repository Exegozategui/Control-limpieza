import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center p-4 shadow-lg">
            <Card.Body>
              <Card.Title as="h1" className="mb-4 text-primary">Control de limpieza de baños</Card.Title>
              <Card.Text className="lead">
                Bienvenido al sistema de control de limpieza de baños. Utiliza el menú de navegación para acceder a las diferentes secciones y registros.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
