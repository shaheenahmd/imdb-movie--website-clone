
import './App.css';
import {Routes,Route} from "react-router-dom";

import Header from './components/header/Header'
// import Popular from './components/Popular/Popular';
import Home from './components/home/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './components/movieDetail/Movie';





function App() {
  return (
    <div className="App">
    <Header></Header>
   
    <Routes>

      <Route index element={<Home/>}></Route>
      <Route path="movie/:id" element={<Movie/>}></Route>
      <Route path="movies/:type" element={<MovieList/>}></Route>
      <Route path="/*" element={<h1>error page</h1>}></Route>


      {/* <Route path='/popular' element={<Popular/>}></Route>
      <Route path='' element={<Home/>}></Route> */}
     
    </Routes>

   

    

    </div>
  );
}

export default App;





     