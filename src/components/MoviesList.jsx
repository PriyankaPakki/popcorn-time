import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import MovieCard from './MovieCard'

export default function MoviesList({ searchValue, year, type }) {
    const [movies, setMovies] = useState([])
    const getMovies = () => {
        try {
            let url = `http://www.omdbapi.com/?s=${searchValue}`
            if (year) {
                url += `&y=${year}`
            }
            if (type) {
                url += `&type=${type}`
            }
            url += `&apikey=16328196`
            console.log(url)
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
    }, [searchValue, year, type])

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
