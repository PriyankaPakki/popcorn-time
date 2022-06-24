import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import MovieCard from './MovieCard'

export default function MoviesList({ searchValue }) {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        try {
            return axios
                .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=16328196`)
                .then((response) => {
                    if (response.data.Response) {
                        console.log(
                            `Got ${
                                Object.entries(response.data.Search).length
                            } movies`
                        )
                    }
                    setMovies(response.data.Search)
                })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [searchValue])

    return (
        <div>
            <Row>
                {movies.map((movie, index) => (
                    <Col key={index}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}
