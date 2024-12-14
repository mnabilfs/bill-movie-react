import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <div className="Movie-image" src={movie.poster_path} />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_averange}</div>
        </div>
      );
    });
  };

  const search = (q) => {
    console.log({ q });
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bill Movie</h1>
        <input
          type="text"
          placeholder="Search Movie"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
