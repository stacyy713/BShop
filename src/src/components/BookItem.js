import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom";
import {BOOK_ROUTE} from "../utils/consts";

const BookItem = ({book}) => {
    const history = useHistory();

    return (
        <Col md={3} className={"mt-4"} onClick={() => history.push(BOOK_ROUTE + '/' + book.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + book.img}/>
                <div className="text-center">
                    <div>{book.name}</div>
                </div>
                <div className="text-black-50 text-center" style={{fontSize: 10}}>
                    <div>{book.author}</div>
                </div>
            </Card>
        </Col>
    );
};

export default BookItem;
