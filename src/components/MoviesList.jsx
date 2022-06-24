import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import MovieCard from './MovieCard'

export default function MoviesList({ searchValue, year }) {
    const [movies, setMovies] = useState([])
    const getMovies = () => {
        try {
            let url
            if (year) {
                url = `http://www.omdbapi.com/?s=${searchValue}&y=${year}&apikey=16328196`
            } else {
                url = `http://www.omdbapi.com/?s=${searchValue}&apikey=16328196`
            }
            return axios.get(url).then((response) => {
                console.log(response.data.Search)
                if (response.data.Response && response.data.Search) {
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
    }, [searchValue, year])

    let movieCards = () => {
        if (movies && movies.length > 0) {
            return movies.map((movie, index) => (
                <Col key={index}>
                    <MovieCard movie={movie} />
                </Col>
            ))
        }
    }

    return (
        <div>
            <Row>{movieCards()}</Row>
        </div>
    )
}
