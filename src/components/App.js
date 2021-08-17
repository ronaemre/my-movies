import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
require(`dotenv`).config();

//console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  //HERHANGİBİR HTTP İSTEĞİ YAPACASAK BU METODUN İÇERİNDE YAPILMASI DOPRUDUR
  /*  async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({ movies: data });
  } */

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/list/7103640?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    console.log(response.data.items);
    this.setState({ movies: response.data.items });
  }

  // deleteMovie = (movie) => {
  //    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  /*   this.setState({
      movies: newMovieList,      //Elimizde bir film bilgiis olmasaydı bu kullanılablirdi ama aşağıdaki şu an ki statei alıp kullandığı için terih edilmiştir.
    }); */
  //   this.setState((state) => ({
  //    movies: newMovieList,
  //  }));
  //  };

  //FETCH API
  /*   deleteMovie = async (movie) => {
    const baseURL = `http://localhost:3002/movies/${movie.id}`;
    await fetch(baseURL, {
      method: "DELETE",
    });
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  }; */

  //AXIOS API ILE DELETE
  deleteMovie = async (movie) => {
    /* axios.delete(`http://localhost:3002/movies/${movie.id}`); */ //manuel kurduğumuz api 
    axios.post(`https://api.themoviedb.org/3/list/7103640/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    /* console.log(event.target.value); */
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-12"}>
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
