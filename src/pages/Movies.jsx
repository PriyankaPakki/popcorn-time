import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MoviesList from '../components/MoviesList'

export default function Movies() {
    const [searchValue, setSearchValue] = useState('toy')
    const [year, setYear] = useState('')
    const [type, setType] = useState('')
    const [favorites, setFavorites] = useState({})

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleYearChange = (date, dateString) => {
        setYear(parseInt(dateString))
    }

    const handleInputChange = (event) => {
        event.persist()
        setSearchValue(event.target.value || 'toy')
    }

    let newFavs

    const addToFavorites = (movie) => {
        let movieId = movie.imdbID
        if (movieId in favorites) {
            newFavs = { ...favorites }
            delete newFavs[movieId]
            setFavorites(newFavs)
        } else {
            setFavorites((favorites) => ({
                ...favorites,
                [movie.imdbID]: movie,
            }))
        }
    }

    return (
        <div>
            <Navbar
                searchValue={searchValue}
                setSearchValue={handleInputChange}
                year={year}
                setYear={handleYearChange}
                type={type}
                setType={handleTypeChange}
            ></Navbar>
            <MoviesList
                searchValue={searchValue}
                year={year}
                type={type}
                favorites={favorites}
                setFavorites={addToFavorites}
            />
        </div>
    )
}
