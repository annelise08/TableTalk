// this will render an individual card component
import React from "react";
import Card from 'react-bootstrap/Card'

const ReccCard = ({
    info
}) => {
    const {restaurant_name, fav_dishes, stars, notes, photo_name} = info;
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoH7lJoG8RO6l0tUSaDyeijKEE_MYS0Ss7YwNgkDEdA&usqp=CAU&ec=48600113" />
      <Card.Body>
        <Card.Title>{restaurant_name}</Card.Title>
        <Card.Text>
          Stars: {stars}/5
          <div>Favorite Dishes: {fav_dishes}</div> 
          <div>Notes: {notes}</div>
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default ReccCard;