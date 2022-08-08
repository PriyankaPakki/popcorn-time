import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


 type TMovieData = {
    title: string, 
    released: string, 
    genre: string, 
    description: string, 
    poster: string, 
    rating: string
}

const movieObject:TMovieData = {
    title: "", 
    released: "", 
    genre: "", 
    description: "", 
    poster: "", 
    rating: ""
}

export default function MovieDetails() {
    const { ID }  = useParams<string>()
    const [movieData, setMovieData] = useState<TMovieData>(movieObject)
    const baseUrl = " http://localhost:9010/movie"

    const getMovieData = async (ID: string | undefined): Promise<void> => {
        return await axios
            .get(
                `${baseUrl}/${ID}`
            )
            .then((res) => res.data)
            .then((res) => {
                setMovieData(res.data)
            })
    }

    useEffect(() => {
        getMovieData(ID)
    }, [ID])

    const { title, released, genre, description, poster, rating } = movieData
    
    return (
        <div className="movie-card-container">
            <div className="image-container">
                <img src={poster} alt="" />
            </div>
            <div className="movie-info">
                <h2>Movie Details</h2>
                <div>
                    <h1>{title}</h1>
                    <small>Released Date: {released}</small>
                </div>
                <h4>Rating: {rating} / 10</h4>
                <p>{description && description.substr(0, 350)}</p>
                <div className="tags-container">
                    {genre && genre.split(', ').map((g: string) => <span key={g}>{g}</span>)}
                </div>
            </div>
        </div>
    )
}

