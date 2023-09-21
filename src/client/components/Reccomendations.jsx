// Reccomendations page should request data from the database, then render all data as cards
import React, { Component, useEffect, useState } from "react";
import ReccCard from "./ReccCard";
import { CardGroup } from "react-bootstrap";
import AddReccCard from "./AddReccCard";
import { useAuth } from "../state-management/AuthProvider";

const Reccomendations = () => {
  // setting state: need to hold a "fetched data" state and a "reccs" (array of recc objects) state
  const [reccs, setReccs] = useState([]);
  const [fetchedDataBool, setFetchedDataBool] = useState(false);
  // useAuth exposes user and login functionality
  const { user } = useAuth();

  // when component mounts, make a fetch request to get reccommendations from database
  // separate fetching code from code to render recc card

  // when we fetch a user's reccs, we should send the user's name in the request parameters
  useEffect(() => {
    fetch(`/recc/${user}`)
      .then((res) => res.json())
      .then((reccs) => {
        if (!Array.isArray(reccs)) reccs = [];
        console.log(`Got reccs: ${reccs}`);
        setReccs(reccs);
        setFetchedDataBool(true);
      });
  }, []);

  // when we make a post request, update state with new recc

  // this function updates the state when a new recommendation is added
  const handleUpdateReccs = (newRecc) => {
    const newReccs = reccs.slice();
    newReccs.push(newRecc);
    setReccs(newReccs);
  };

  const handleDeleteReccs = (title) => {
    const newReccs = reccs.slice();
    for (let i = 0; i < newReccs.length; i++) {
      if (newReccs[i].restaurant_name === title) {
        const returnReccs = newReccs.slice(0, i).concat(newReccs.slice(i + 1));
        // console.log(newReccs)
        setReccs(returnReccs);
      }
    }
  };

  // create a recc card for each recc component stored in the state
  if (fetchedDataBool && reccs !== []) {
    const reccElements = reccs.map((recc, i) => {
      return (
        <ReccCard key={i} info={recc} handleDeleteReccs={handleDeleteReccs} />
      );
    });
    return (
      // render the recc cards and the add recc card component
      <div className="recc-container">
        <AddReccCard onReccsChange={handleUpdateReccs} />
        {reccElements}
      </div>
    );
  } else
    return (
      <div>
        <div>No reccomendations found</div>
      </div>
    );
}

export default Reccomendations;
