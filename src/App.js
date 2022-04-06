import React from 'react';

function Food({ name }){
  console.log(name);
  return (
    <div>
      <h3>I love {name}</h3>
    </div>
     
  );
}

const foodILike = [
  {
    name: "Kimchi"
  },
  {
    name: "Ice-cream"
  },
  {
    name: "Chocolate"
  }
]


function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => (
        <Food name={dish.name} />
      ))}
    </div>
  );
}

export default App;
