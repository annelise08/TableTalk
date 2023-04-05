// this will render an individual card component
import React from "react";
import Card from 'react-bootstrap/Card'

const ReccCard = ({
    info
}) => {
    const {restaurant_name, fav_dishes, stars, notes, photo_name} = info;
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../images/bouldin.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default ReccCard;