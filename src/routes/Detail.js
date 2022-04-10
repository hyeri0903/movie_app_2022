import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Detail() {
  const { state } = useLocation();
  console.log(state)

  return (
    <div>
      <img
        src={state.poster}
        alt={state.title}
        title={state.title}
      />
      <div>
        <h3>{state.title}</h3>
        <h5>{state.year}</h5>
        <ul>
          {state.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p>{state.summary}</p>
      </div>
    </div>
  );
  
}

export default Detail;