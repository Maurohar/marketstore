import { Link } from 'react-router-dom'
import React from 'react';
import { Card ,Container , Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item ({ product }) {
    return (
        <Container className="Itemcontainer">
            <Row>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={product.image} alt="Card image" />            
                <Card.Body>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.id}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                    <Link className="btn btn-danger">Buy</Link>
                </Card.Body>
            </Card>
            </Row>
        </Container>
    );
}




