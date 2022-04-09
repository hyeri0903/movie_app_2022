import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies  = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies.data.data.movies);
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{ isLoading ? "Loading..." : movies.map(moview => {
      console.log(movies);
      return <Movie 
        id={movies.id} 
        year={movies.year}
        title={movies.title}
        summary={movies.summary}
        poster={movies.poster}
        />
    })}</div>;
  }
}

export default App;
