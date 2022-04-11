import axios from '../axios';
import React, { useState, useEffect } from 'react'
import requests from '../requests';
import '../components/banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
     async function fetchMovie () {
         const request = await axios.get(requests.fetchNetflixOriginals)
         setMovie(
             request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
         );
         return request
     }
     fetchMovie();
    }, [])
    console.log(movie)
    
    const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str; 
    }

  return (
    <header className='banner'
      style={{
          backgroundSize: 'cover',
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition: 'center center',
      }}
    > 
    <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className=''>
          <button className='banner__buttons'>Play</button>
          <button className='banner__buttons'>My List</button>
        </div>
        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        <div className='banner__fadeBottom'/>
    </div>
    
    </header>
  )
}

export default Banner