import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {Context} from "../../index";
import {createBook} from "../../http/bookAPI";

const CreateBook = ({show, onHide}) => {
    const {book} = useContext(Context);

    //Оживляем инпуты
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState(0);
    const [genre, setGenre] = useState('');
    const [originality, setOriginality] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addBook = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('author', author);
        formData.append('year', `${year}`);
        formData.append('genre', genre);
        formData.append('originality', originality);
        formData.append('price', `${price}`);
        formData.append('img', file);
        createBook(formData).then(data => onHide());
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новую книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={name}
                                  onChange={e => setName(e.target.value)}
                                  className="mt-3"
                                  placeholder={"Введите название книги"}
                    />
                    <Form.Control value={author}
                                  onChange={e => setAuthor(e.target.value)}
                                  className="mt-3"
                                  placeholder={"Введите автора книги"}
                    />
                    <Form.Control value={year}
                                  onChange={e => setYear(Number(e.target.value))}
                                  className="mt-3"
                                  placeholder={"Введите год публикации книги"}
                                  type="number"
                    />
                    <Form.Control value={genre}
                                  onChange={e => setGenre(e.target.value)}
                                  className="mt-3"
                                  placeholder={"Введите жанр"}
                    />
                    <Form.Control value={originality}
                                  onChange={e => setOriginality(e.target.value)}
                                  className="mt-3"
                                  placeholder={"Оригинал/копия"}
                    />
                    <Form.Control value={price}
                                  onChange={e => setPrice(Number(e.target.value))}
                                  className="mt-3"
                                  placeholder={"Введите стоимость книги"}
                                  type="number"
                    />
                    <Form.Control
                                  className="mt-3"
                                  type="file"
                                  onChange={selectFile}
                    />
                    <hr/>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBook}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBook;
