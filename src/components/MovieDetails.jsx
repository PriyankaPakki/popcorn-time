import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function MovieDetails({ movieId }) {
    const [movieData, setMovieData] = useState({})
    const getMovieData = (movieId) => {
        return axios
            .get(
                `https://www.omdbapi.com/?apikey=16328196&i=${movieId}&plot=full`
            )
            .then((res) => res.data)
            .then((res) => {
                setMovieData(res)
            })
    }

    useEffect(() => {
        getMovieData(movieId)
    }, [movieId])

    const { Title, Released, Genre, Plot, Poster, imdbRating } = movieData

    return (
        <div className="movie-card-container">
            <div className="image-container">
                <div
                    className="bg-image"
                    style={{ backgroundImage: `url(${Poster})` }}
                />
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
                    {Genre && Genre.split(', ').map((g) => <span>{g}</span>)}
                </div>
            </div>
        </div>
    )
}
