import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import MoviesList from '../components/MoviesList'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Movies() {
    const [queryParams, setQueryParams] = useSearchParams()

    const [searchValue, setSearchValue] = useState(
        queryParams.get('searchValue') || 'toy'
    )
    const [year, setYear] = useState(queryParams.get('year') || '')
    const [type, setType] = useState(queryParams.get('type') || '')
    const [favorites, setFavorites] = useState({})

    useEffect(() => {
        setQueryParams({ searchValue: searchValue, year: year, type: type })
    }, [searchValue, year, type])

    let searchTerm

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleYearChange = (date, dateString) => {
        setYear(parseInt(dateString))
    }

    const handleInputChange = (event) => {
        event.persist()
        searchTerm = event.target.value || 'toy'
    }

    const handleClick = (event) => {
        setSearchValue(searchTerm.trimEnd() || searchValue.trimEnd())
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
                handleSearchInputChange={handleInputChange}
                setSearchValue={handleClick}
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
