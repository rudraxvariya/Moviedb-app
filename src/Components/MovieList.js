import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return (
                                <Movie key={i} image={movie.poster_path} vote={movie.vote_average} />
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default MovieList;