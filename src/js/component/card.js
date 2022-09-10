import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Card = (props) =>
{
    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
      )

}

export default Card;