import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import MovieCard from './MovieCard'
import { TMovieType } from '../types/TMovieType'
import { TfavoritesType } from '../pages/Movies'


type MoviesListProps = {
   searchValue: string
   year: string,
   type: string,
   favorites: TfavoritesType
   setFavorite: (type: TMovieType) => void
}

export default function MoviesList({
    searchValue,
    year,
    type,
    favorites,
    setFavorite,
}: MoviesListProps) {

    const baseUrl = " http://localhost:9010/movies"

    const [movies, setMovies] = useState<TMovieType[]>([])
    const getMovies = async () => {
        try {
            let url = `${baseUrl}?title=${searchValue}`
            if (year) {
                url += `&year=${year}`
            }
            // if (type) {
            //     url = type === 'all' ? url : url + `&type=${type}`
            // }
            // url += `&apikey=16328196`
            return await axios.get(url).then((response) => {
                setMovies(response.data)
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [searchValue, year, type, favorites])

    const movieCards = () => {
        if (movies && movies.length > 0) {
            return movies.map((movie, index) => (
                <Col key={index}>
                    <MovieCard
                        movie={movie}
                        setFavorite={setFavorite}
                    />
                </Col>
            ))
        }
    }

    const favoriteMovies = () => {
        const movieColumns = []

        if (Object.keys(favorites).length > 0) {
            for (const movieId in favorites) {
                movieColumns.push(
                    <Col key={movieId}>
                        <MovieCard
                            movie={favorites[movieId]}
                            setFavorite={setFavorite}
                        />
                    </Col>
                )
            }
        }
        return movieColumns
    }

    return (
        <div>
            <Row>{movieCards()}</Row>
            <h1 style={{ color: 'white' }}>Your Favourites</h1>
            <Row>{favoriteMovies()}</Row>
        </div>
    )
}
