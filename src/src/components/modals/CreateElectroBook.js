import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { Context } from "../../index";
import { createBook } from "../../http/electroBookAPI";

const CreateElectroBook = ({ show, onHide }) => {
  const { book } = useContext(Context);

  //Оживляем инпуты
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(0);
  const [link, setGenre] = useState("");
  const [format, setOriginality] = useState("");
  const [price, setPrice] = useState(0);

  const addBook = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("author", author);
    formData.append("year", `${year}`);
    formData.append("link", link);
    formData.append("format", format);
    formData.append("price", `${price}`);
    createBook(formData).then((data) => onHide());
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новую электронную книгу
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder={"Введите название книги"}
          />
          <Form.Control
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-3"
            placeholder={"Введите автора книги"}
          />
          <Form.Control
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="mt-3"
            placeholder={"Введите год публикации книги"}
            type="number"
          />
          <Form.Control
            value={link}
            onChange={(e) => setGenre(e.target.value)}
            className="mt-3"
            placeholder={"Введите ссылку на книгу"}
          />
          <Form.Control
            value={format}
            onChange={(e) => setOriginality(e.target.value)}
            className="mt-3"
            placeholder={"Формат книги"}
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder={"Введите стоимость книги"}
            type="number"
          />
          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBook}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateElectroBook;
