import React, { useEffect, useState, useContext } from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Context } from "../index";
import ElectroBookList from "../components/ElectroBookList";
import { useParams } from "react-router-dom";
import { fetchBooks } from "../http/electroBookAPI";

const ElectroBookPage = () => {
  const { electro } = useContext(Context);
  useEffect(() => {
    fetchBooks().then((data) => electro.setBooks(data.rows));
  }, []);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={15}>
          <ElectroBookList />
        </Col>
      </Row>
    </Container>
  );
};

export default ElectroBookPage;
