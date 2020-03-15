import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => this.setState({ movies: response, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <div className="AddCard">
          <Link className="link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div className="movie-list">
          {movies.map((movie,index) => <MovieCard key={index} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
