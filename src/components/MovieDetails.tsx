import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


 type TMovieData = {
    Title: string, 
    Released: string, 
    Genre: string, 
    Plot: string, 
    Poster: string, 
    imdbRating: string
}

const movieObject:TMovieData = {
    Title: "", 
    Released: "", 
    Genre: "", 
    Plot: "", 
    Poster: "", 
    imdbRating: ""
}

export default function MovieDetails() {
    const { imdbID }  = useParams<string>()
    const [movieData, setMovieData] = useState<TMovieData>(movieObject)
    const getMovieData = (imdbID: string | undefined): Promise<void> => {
        return axios
            .get(
                `https://www.omdbapi.com/?apikey=16328196&i=${imdbID}&plot=full`
            )
            .then((res) => res.data)
            .then((res) => {
                setMovieData(res)
            })
    }

    useEffect(() => {
        getMovieData(imdbID)
    }, [imdbID])

    const { Title, Released, Genre, Plot, Poster, imdbRating } = movieData
    return (
        <div className="movie-card-container">
            <div className="image-container">
                <img src={Poster} alt="" />
            </div>
            <div className="movie-info">
                <h2>Movie Details</h2>
                <div>
                    <h1>{Title}</h1>
                    <small>Released Date: {Released}</small>
                </div>
                <h4>Rating: {imdbRating} / 10</h4>
                <p>{Plot && Plot.substr(0, 350)}</p>
                <div className="tags-container">
                    {Genre && Genre.split(', ').map((g: string) => <span key={g}>{g}</span>)}
                </div>
            </div>
        </div>
    )
}

