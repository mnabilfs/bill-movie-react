import { useState, useEffect } from "react";
import { getMovieList, searchMovie } from "./api";
import "./App.css";
import PopularMovieList from './components/PopularMovieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovies(query.results); 
    } else {
      getMovieList().then((result) => {
        setMovies(result);
      });
    }
  };

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
          <PopularMovieList movies={movies} />
        </div>
      </header>
    </div>
  );
}

export default App;
