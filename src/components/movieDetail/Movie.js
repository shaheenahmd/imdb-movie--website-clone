import React, {useState,useEffect} from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'


const Movie = () => {

    const [currentMovie,setMovie]=useState()
    const{id}=useParams()

    useEffect(()=>{
        getData()
        window.scrollTo(0,0)

    },[])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35f7d63f1fb9336346b7a7aed9564489&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data.results))
    }

  return (
    <div>
    
      <h1> movie detail page</h1>
    </div>
  )
}

export default Movie
