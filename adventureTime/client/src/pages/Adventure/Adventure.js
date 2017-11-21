import React, { Component } from "react";

import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Adventure extends Component {
  state = {
    adventures: [],
  };

  componentDidMount(){
    this.getData();
    this.popData();
  }
// this function pushes data to the server. 
  popData = test =>{
    API.saveAdventure({
    "user": "TST", //TODO I don't know if this is right...do I set the value as an object?
    "title": "Some Tomb somwhere",
    "description": "Had to climb, swim, swing, and kill some bad guys.",
    "directions": "I don't know I was blindfolded",
    "location": "In the jungle",
    "category": "Hiking",
    "funRating": 5,
    "diffRating": 3})
  }

getData = event => {
    API.getAdventures()
      .then(res => this.setState({ adventures: res.data }))
      .catch(err => console.log(err));
  };

  
  render() {
    return (
      <Container fluid>
        {this.state.adventures.map(adventure => (
        <div>
            <h1>{adventure.category}</h1>
            <h1>{adventure.title}</h1>
            <h2>Description: </h2>
            <p>{adventure.description}</p>
            <h2>Directions: </h2>
            <p>{adventure.directions}</p>
            <h2>Location: </h2>
            <p>{adventure.location}</p>
            <h2>Description: </h2>
            <p>{adventure.description}</p>
            <h4>Fun Rating: {adventure.funRating}</h4>
            <h4>Difficulty Rating: {adventure.diffRating}</h4>
        </div>
        ))} 
      </Container>
    );
  }
}

export default Adventure;
