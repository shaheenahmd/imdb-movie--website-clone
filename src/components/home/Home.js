import React, {useEffect,useState} from 'react'
import "./Home.css"
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import MovieList from '../MovieList/MovieList';

const Home = () => {
  const [popularMovie,setPopularMovie]=useState([])

    useEffect(()=>{
      // AXIOS METHOD 
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=35f7d63f1fb9336346b7a7aed9564489&language=en-US")
      .then((res)=>{
      console.log(res.data.results);
      setPopularMovie(res.data.results);



      // NORMAL JS METHODE FECTHING
        // fetch("https://api.themoviedb.org/3/movie/popular?api_key=35f7d63f1fb9336346b7a7aed9564489&language=en-US")
        //     .then((res) => res.json())
        //     .then((data) => console.log(data));

        })
    },[])

  return (
    <div className='poster'>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
       > 
          {
            popularMovie.map((movie=>
             <>
             <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
              </div>
              <div className='posterOverlay'>
                <div className="posterImage_title">
                  <h2>{movie? movie.original_title:'' }</h2>
                </div>
                <div className="posterImage_runtime">
                    <h6>{movie? movie.release_date:'' }</h6>
                    <span className="posterImage_rating">
                      {movie? movie.vote_average:'' }
                      <i className="fas fa-star" />{""}
                    </span>
                </div>

                <div className="posterImageDescription">
                  <h6>{movie? movie.overview :""}</h6>
                </div>
                
              </div>
              </>
           
            ))
          }     
      </Carousel>

      <MovieList/>
     
    </div> 
  )
}

export default Home
