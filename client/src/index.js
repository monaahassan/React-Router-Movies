import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
// You'll need to wrap <App /> for routing to work
ReactDOM.render(
<Router>
<App />
</Router>,
document.getElementById('root'),
);


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import setupTest from '/setupTests'
// import Movies from './Movies/Movie';
// import MovieCard from './Movies/MovieCard';
// import MovieList from './Movies/MovieList';
// import SavedList from './Movies/SavedList';
// import './index.css';
// import App from './App';
// // import { Router } from 'express';

// // You'll need to wrap <App /> for routing to work

// const MoreMovies = () => {
//     const [Movie, SetMovie] = useState();

//     return (
//         <div className="App">
//             <nav>
//                 <h1 className="movie=header">  </h1>
//                 <div className="nav-links"></div>
//                 <Link to="/">Home</Link>
//             </nav>
// <Switch>
// <Route exact path ="/">
//     {/* <Home ourOwnProps={Homies}></Home> */}
// </Route>
// <Route path='/movie' component={Movie}></Route>
// <Route path='/movie-card' component={MovieCard}></Route>
// <Route path='/movie-list' component={MovieList}></Route>
// <Route path='/saved-list' component={SavedList}></Route>
// </Switch> 
//         </div>
//     );
// };

// const rootElement = document.getElementById('root');
