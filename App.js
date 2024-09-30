// src/App.js
import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const firstName = "Yannick"; // Remplacez par votre prénom ou laissez vide

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Name />
              <Price />
              <Description />
            </Col>
            <Col>
              <Image />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {firstName ? (
          <>
            <p>Bonjour, {firstName}!</p>
            <img src="https://via.placeholder.com/100" alt="Votre image" />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </Container>
  );
};

export default App;
