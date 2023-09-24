import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const App = ()=> {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios('/api/movies');
      setMovies(data);
    }
    fetchData();
  }, [])
  
  return (
    <div>
      <h1>Some Movies</h1>
      <ul>
        {
          movies.map((movie) => {
            return(
              <li key={movie.id}>
                <h2>{movie.title}</h2>
                <h3>Rating: {movie.stars} Stars</h3>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
