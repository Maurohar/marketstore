import { Link } from 'react-router-dom'
import React from 'react';
import { Card ,Container , Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item ({ products }) {
    return (
        <Container className="Itemcontainer">
            <Row>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={products.image} alt="Card image" />            
                <Card.Body>
                    <Card.Text>{products.category}</Card.Text>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>{products.id}</Card.Text>
                    <Card.Text>${products.price}</Card.Text>
                    <Link to='/' className="btn btn-danger">Buy</Link>
                </Card.Body>
            </Card>
            </Row>
        </Container>
    );
}




