import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          console.log(response)
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
       
<Switch>
      <Route exact path='/'>
        <MovieList movies={MovieList} />
      </Route>
      <Route path='/movies/:id'>
        <Movie />
      </Route>
</Switch>
    </div>
  );
}


// const rootElement = document.getElementById('root');
// ReactDOM.render(
// <Router>
//  <App/>
// </Router>
// );


//   return (
//     <div>
//       <SavedList list={[ /* This is stretch */]} />

//       <div>Replace this Div with your Routes</div>
//     </div>
//   );
// }

// return (
//   <div className="App">
//       <nav>
//           <h1 className="movie=header">  </h1>
//           <div className="nav-links"></div>
//           <Link to="/">Home</Link>
//       </nav>
// <Switch>
// <Route exact path ="/">
// {/* <Home ourOwnProps={Homies}></Home> */}
// </Route>
// <Route path='/movie' component={Movie}></Route>
// <Route path='/movie-card' component={MovieCard}/>
// <Route path='/movie-list' component={MovieList}/>
// <Route path='/saved-list' component={SavedList}/>
// </Switch> 
//   </div>
// );
// };