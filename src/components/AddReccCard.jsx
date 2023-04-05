// this will render an add card component
import React from "react";
import Card from 'react-bootstrap/Card'
import { ListGroup } from "react-bootstrap";



const AddReccCard = () =>{
  return(
    <div>
    <h2>Add a new reccomendation</h2>
    <form onSubmit={(e) => {
        e.preventDefault();
        const restaurant_name = e.target[0].value;
        fetch('/recc', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({restaurant_name})
        }).then((res) => {
            console.log(res)
        })
    }}>
    <label>Restaurant name: </label>
    <input type="text" />
    <button type="submit">Add reccomendation</button>
    </form>
    </div>
 )
}

export default AddReccCard;