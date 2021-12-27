import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { BOOK_ROUTE } from "../utils/consts";

const ElectroBookItem = ({ book }) => {
  const history = useHistory();

  return (
    <Col md={3} className={"mt-4"}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <div className="text-center">
          <div>{book.name}</div>
        </div>
        <div className="text-black-50 text-center" style={{ fontSize: 10 }}>
          <div>{book.author}</div>
          <div>{book.link}</div>
          <div>{book.format}</div>
        </div>
      </Card>
    </Col>
  );
};

export default ElectroBookItem;
