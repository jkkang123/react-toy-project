import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";
import {naverMoviesApi} from '../api';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    //movies.data.data.movies == {data: {data: { movies } } }
    const {
      data: {
        items
      }
    } = await naverMoviesApi.search('어벤져스');
    //this.setState({movies:movies, isLoading: false})
    this.setState({movies: items, isLoading: false})
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (<section className="container">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading..</span>
          </div>)
          : (<div><h1>Movie</h1>
            <div className="movies">
            {movies.map(movie => (
              <Movie link={movie.link} subtitle={movie.subtitle} pubDate={movie.pubDate}
                title={movie.title} actor={movie.actor} image={movie.image}
                userRating={movie.userRating}/>))}
          </div></div>)
      }
    </section>);
  }
}

export default Home;
