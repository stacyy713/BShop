import React, {useContext, useEffect} from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import BookList from "../components/BookList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBooks} from "../http/bookAPI";


const Shop = observer(() => {
    const {book} = useContext(Context);

    useEffect(() => {
        fetchBooks().then(data => book.setBooks(data.rows));
    }, []);

    return (
        <Container>
            <Row className="mt-2">
                <Col md={15}>
                    <BookList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
