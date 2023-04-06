// this will render an individual card component
import React from "react";
import Card from 'react-bootstrap/Card'
import { ListGroup } from "react-bootstrap";

const ReccCard = ({
    info
}) => {
    const {restaurant_name, fav_dishes, stars, notes, photo_name} = info;
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo_name} />
      <Card.Body>
        <Card.Title>{restaurant_name}</Card.Title>
        <Card.Text>
          <ListGroup>
          <ListGroup.Item> <b>Stars:</b> {stars}/5 </ListGroup.Item>
          <ListGroup.Item><b>Favorite Dishes: </b>{fav_dishes} </ListGroup.Item>
          <ListGroup.Item><b>Notes:</b> {notes} </ListGroup.Item>
          <ListGroup.Item className="delete"><button className="btn btn-primary">Delete</button> </ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default ReccCard;