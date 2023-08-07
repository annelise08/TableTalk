// this will render an add card component
import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

const AddReccCard = (props) => {

  const addRecc = (e) => {
    e.preventDefault();
    // get data from form submission
    const restaurant_name = e.target[0].value;
    const fav_dishes = e.target[1].value;
    const stars = e.target[2].value;
    const notes = e.target[3].value;
    const photo_name = e.target[4].value;
    // clear form values after they have been stored
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
    // post data to database
    fetch("/recc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        restaurant_name,
        fav_dishes,
        stars,
        notes,
        photo_name,
      }),
    }).then((res) => {
      // call function to update state, passing in the new state information
      props.onReccsChange({
        restaurant_name: restaurant_name,
        fav_dishes: fav_dishes,
        stars: stars,
        notes: notes,
        photo_name: photo_name,
      });
    });
  };

  // render the form
  return (
    <div className="add-recc">
      <h2>Add a reccomendation</h2>
      <form onSubmit={addRecc}>
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
        <button type="submit" className="btn btn-primary">
          Add reccomendation
        </button>
      </form>
    </div>
  );
};

export default AddReccCard;
