import React, {useEffect, useState} from 'react';
import {Col, Row, Container, Card, Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import BookItem from "../components/BookItem";
import {useParams} from "react-router-dom";
import {fetchOneBook} from "../http/bookAPI";

const BookPage = () => {
    const [book, setBook] = useState({});
    const {id} = useParams();
    useEffect(() => {
        fetchOneBook(id).then(data => setBook(data))
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + book.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <h5>{book.name}</h5>
                        <div>
                            <Row key={book.id}>
                                <br/>
                                Автор: {book.author}
                                <br/>
                                Жанр: {book.genre}
                                <br/>
                                Год: {book.year}
                                <br/>
                                Оригинальность: {book.originality}
                            </Row>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                          style={{width: 300, height: 300, fontSize: 32, border: '3px solid lightgray'}}>
                        <h3 align={"center"}>{book.price} грн</h3>
                        <Button variant={"outline-dark"}>В корзину</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BookPage;
