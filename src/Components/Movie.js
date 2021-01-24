import React from 'react';
import ReactStars from 'react-rating-stars-component';
const Movie = (props) => {
    console.log(props.vote);
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image === null ? <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" alt="cardiameg" style={{ width: "100%", height: 360 }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="cardiameg" style={{ width: "100%", height: 360 }} />
                    }
                </div>
                <div className="card-content">
                    <ReactStars count={props.vote} size={20} color1={'#ffd700'}></ReactStars>
                </div>
            </div>

        </div>
    )
}
export default Movie;