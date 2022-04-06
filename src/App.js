import React from 'react';

function Food({ fav }){
  console.log(fav);
  return (
      <h3>I love {fav}</h3>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food 
        fav="kimchi" 
        something={true}
        papa={"hello", 1, 2, 3, 4}
      />
      <Food fav="chocolate" />
      <Food fav="icecream" />
    </div>
  );
}

export default App;
