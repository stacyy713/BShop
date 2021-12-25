import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBook from "../components/modals/CreateBook";

const Admin = () => {
    const [bookVisible, setBookVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button className="mt-5" onClick={() => setBookVisible(true)}>Добавить новую книгу</Button>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
        </Container>
    );
};

export default Admin;
