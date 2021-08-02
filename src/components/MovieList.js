import React from "react";

const MovieList = (props) => {
  /*   function handleClick(e) {
    console.log(e.pageX);
  }
 */
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={movie.imageURL}
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  onClick={(event) => props.deleteMovieProp(movie)}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
                <h2>
                  <span className="badge badge-info">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/*   render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4 shadow-sm">
            <img
              src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg"
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-body">
              <h5 className="card-title">Sample Movie</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-md btn-outline-danger">
                  Delete
                </button>

                <h2>
                  <span className="badge badge-info">9.0</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
} */

export default MovieList;
