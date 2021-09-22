import React, { useReducer } from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./Movie.css";

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

function Movie({link, subtitle, pubDate, title, actor, image, userRating}) {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div className="movie">
      <Link to={{
            pathname: `/movie/detail/${subtitle}`,
            state:{
              link,
              subtitle,
              pubDate,
              title,
              image,
              userRating
            }
      }}>
        <img src={image} alt={title} titlt={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}</h3>
      <h4 className="movie__user_rating"><span>평점 </span>{userRating}/10</h4>
        <h5 className="movie__year"><span>개봉일</span>{pubDate}</h5>
      <p className="movie__actor"><span>배우</span>{actor}...</p>
      </div>
    </Link>
    <div className="movie__ddabong">
        상세보기
        <p>
          좋아요 : <b>{state.value}</b>
        </p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      </div>
  </div>
  )
}

Movie.propTypes = {
  link: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  userRating: PropTypes.string.isRequired

};

export default Movie;
