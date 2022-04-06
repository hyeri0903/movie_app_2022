import React from 'react';
import PropTypes from "prop-types";

function Food({ name, rating}){
  console.log(name);
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
    </div>
     
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

const foodILike = [
  {
    name: "Kimchi",
    rating: 1
  },
  {
    name: "Ice-cream",
    rating: 2
  },
  {
    name: "Chocolate",
    rating: 3
  }
]

function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} rating={dish.rating} />
}


function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
