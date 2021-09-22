import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } =  this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location:{state}} = this.props;
        if(state){
            return(
            <div className="movie">
                <img src={state.image} alt={state.title} titlt={state.title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{state.title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}</h3>
                <h4 className="movie__rating">평점: {state.userRating}/10</h4>
                <h5 className="movie__year">개봉년도: {state.pubDate}</h5>
                <p>자세히: <a className="movie__link" href={state.link}>링크</a></p>
                
            </div>
            </div>
            )
        } else {
            return null
        }
    }

}

export default Detail;