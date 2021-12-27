import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import ElectroBookItem from "./ElectroBookItem";

const ElectroBookList = observer(() => {
  const { electro } = useContext(Context);
  console.log(electro);
  return (
    <Row className="d-flex">
      {electro.electrobooks.map((book) => (
        <ElectroBookItem key={book.id} book={book} />
      ))}
    </Row>
  );
});

export default ElectroBookList;
