// this will render an add card component
import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

// need to pass a function down to addReccCard from Reccomendations that will update state in Reccomendations to include new state obj in reccs
const AddReccCard = () => {
  return (
    <div className="add-recc">
      <h2>Add a reccomendation</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const restaurant_name = e.target[0].value;
          const fav_dishes = e.target[1].value;
          const stars = e.target[2].value;
          const notes = e.target[3].value;
          const photo_name = e.target[4].value;
          fetch("/recc", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ restaurant_name, fav_dishes, stars, notes, photo_name }),
          }).then((res) => {
            // console.log(res);
          });
        }}
      >
        <div>
          <label>Restaurant: </label>
          <input type="text" />
        </div>
        <div>
          <label>Best dishes: </label>
          <input type="text" />
        </div>
        <div>
          <label>Stars: </label>
          <input type="text" />
        </div>
        <div>
          <label>Notes: </label>
          <input type="text" />
        </div>
        <div>
          <label>Image link: </label>
          <input type="text" />
        </div>
        <button type="submit" className="btn btn-primary">Add reccomendation</button>
      </form>
    </div>
  );
};

export default AddReccCard;
